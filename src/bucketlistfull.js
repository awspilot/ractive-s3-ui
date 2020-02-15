
import tabledata from './tabledata';
import {IconRefresh} from './svgicons';

export default Ractive.extend({
	components: {
		tabledata: tabledata,

		'icon-refresh': IconRefresh,
	},
	template: `

		<div class='pull-right' style='padding: 7px;'>
			<a class='btn btn-xs btn-primary ' on-click='create'> CREATE BUCKET </a>
			<!-- <a class='btn btn-xs btn-default {{#if selection_length > 0}}{{else}}disabled{{/if}}' on-click='delete'> <icon-trash /> </a> -->
			<a class='btn btn-xs btn-default {{#if refresh_tables }}disabled{{/if}}' on-click='@this.refresh_buckets()'> <icon-refresh /> </a>
		</div>

		<tabledata columns={{columns}} rows={{rows}} style='top: 38px;margin: 3px;' />

	`,
	refresh_buckets: function() {
		var ractive = this

		ractive.set('rows')

		s3.listBuckets({}, function(err, data) {
			if (err)
				return ractive.set('err', err )


			//ractive.set({buckets: data.Buckets })
			ractive.set('rows', data.Buckets.map(function(b) {
				return [
					{ KEY: true },
					{ S: b.Name },
					{ },
					{ },
					{ }



				]
			}) )

			var waterfallz = data.Buckets.map(function(b) {

				var f = function( cb ) {

					var params = {
						Bucket: b.Name,
					};
					s3.getBucketLocation(params, function(err, data) {
						if (err)
							return cb()

						ractive.set('rows', ractive.get('rows').map(function(row) {
							if ( row[1].S === b.Name ) {
								row[3].S = data.LocationConstraint || 'us-east-1'
							}
							return row
						}))

						cb()
					})

				}
				return f;
			})

			async.parallel(waterfallz, function( err ) {


			})


		})

	},
	data: function() {
		return {
			columns: [
				null,
				"Bucket name",
				"Access",
				"Region",
				"Date created"
			],

			//selection_length: 0,
			//refresh_tables: false,
		}
	},
	on: {
		init() {
			this.refresh_buckets()
		},
		create() {
			this.root.findComponent('tabs').newtab('bucketcreate', 'Create Bucket' )
		},


	}
})
