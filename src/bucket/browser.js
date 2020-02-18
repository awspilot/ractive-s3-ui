
import { IconRefresh, IconTrash } from '../svgicons';

import tabledata from '../tabledata';

export default Ractive.extend({
	components: {
		tabledata: tabledata,

		'icon-refresh': IconRefresh,
		'icon-trash': IconTrash,
	},
	template: `
		<div style='padding: 7px;'>
			<a class="btn btn-sm btn-primary" on-click="upload">Upload</a>

			<div class="pull-right">
				<a class='btn btn-xs btn-default {{#if selection_length === 1}}{{else}}disabled{{/if}}' on-click='delete'> <icon-trash /> </a>
				<a class='btn btn-xs btn-default' on-click='@this.list_objects()'> <icon-refresh /> </a>
			</div>

		</div>
		<tabledata columns={{columns}} rows={{rows}} on-colclick='open-item' style='top: 38px;margin: 3px;' />

	`,


	pickafile( cb ) {
		var element = document.createElement( 'input');
		element.setAttribute('type', 'file');
		//element.setAttribute('accept', "text/csv");
		element.setAttribute('style', "display: none;");
		element.addEventListener('change', function(e) {

			if (element.files.length > 1)
				return alert('Please upload one file at a time')

			cb( null, element.files[0] )
		})

		element.click()
	},

	list_objects() {
		var ractive=this;

		this.set({ rows: null })

		var params = {
			Bucket: this.get('bucket'),
			//Delimiter: 'STRING_VALUE',
			//EncodingType: url,
			//Marker: 'STRING_VALUE',
			//MaxKeys: 'NUMBER_VALUE',
			//Prefix: 'STRING_VALUE',
			//RequestPayer: requester
		};
		s3.listObjects(params, function(err, data) {
			if (err)
				return;

			ractive.set({
				rows: data.Contents.map(function(s3obj) {
					return [
						{ KEY: true },
						{ HASH: s3obj.Key, item: s3obj, },
						{ S: new Date(s3obj.LastModified).toISOString() },
						{ N: s3obj.Size },
						{ S: s3obj.StorageClass },
					]
				})
			})
			console.log(err,data)
		});

	},
	on: {
		upload() {
			var ractive=this;
			this.pickafile(function( err, file ) {
				console.log('selected', file )

				var reader = new FileReader();
				reader.onload = function(e) {
					var params = {
						Body: reader.result,
						Bucket: ractive.get('bucket'),
						Key: file.name,
						//StorageClass: "STANDARD_IA"
					};
					s3.putObject(params, function(err, data) {

						if (err)
							return alert('upload failed')

						ractive.list_objects()
					});
				}
				reader.readAsBinaryString(file);

			})
		},

		delete() {

			var ractive=this;

			var selected = this.get('rows').filter(function(r) { return r[0].selected === true } );

			if ( selected.length === 0 )
				return alert('Please select an object to delete')

			if ( selected.length > 1 )
				return alert('Please select one object at a time')

			var object_key = selected[0][1].item.Key

			var params = {
				Bucket: ractive.get('bucket'),
				Key: object_key
			};
			s3.deleteObject(params, function(err, data) {
				if (err)
					return alert('Delete object failed')

				ractive.list_objects()

			});


		},
		'tabledata.selectrow': function(context) {

			var keypath = context.resolve()
			this.set(keypath + '.0.selected', !this.get(keypath + '.0.selected') )

			this.set('selection_length',
				this.get('rows').filter(function(r) { return r[0].selected === true } ).length
			)
		},
		init() {
			this.list_objects()


			// s3.getObject({
			// 	Bucket: "cccccc-cccccc",
			// 	Key: "dynamodb-ui-local.pem",
			// 	//Range: "bytes=0-9"
			// }, function(err, data ) {
			// 	console.log(err,data)
			// })
		},
	},
	data: function() {
		return {
			columns: [
				null,
				"Name",
				"Last modified",
				"Size",
				"Storage class"
			],
		}
	}
})
