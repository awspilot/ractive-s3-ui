
import tabledata from './tabledata';
import {IconRefresh, IconTrash } from './svgicons';

export default Ractive.extend({
	components: {
		tabledata: tabledata,

		'icon-refresh': IconRefresh,
		'icon-trash': IconTrash,
	},
	template: `

		<div class='pull-right' style='padding: 7px;'>
			<a class='btn btn-xs btn-primary ' on-click='create'> CREATE BUCKET </a>
			<a class='btn btn-xs btn-default {{#if selection_length === 1}}{{else}}disabled{{/if}}' on-click='delete'> <icon-trash /> </a>
			<a class='btn btn-xs btn-default {{#if refresh_tables }}disabled{{/if}}' on-click='@this.refresh_buckets()'> <icon-refresh /> </a>
		</div>

		<tabledata columns={{columns}} rows={{rows}} on-colclick='open-item' style='top: 38px;margin: 3px;' />

	`,
	refresh_buckets: function() {
		var ractive = this

		ractive.set('rows')

		s3.listBuckets({}, function(err, data) {
			if (err)
				return ractive.set('err', err )


			//console.log(data.Buckets)

			ractive.set('rows', data.Buckets.map(function(b) {
				return [
					{ KEY: true },
					{ HASH: b.Name, item: b, },
					{ }, // access
					{ }, // region
					{ S: b.CreationDate, }  // date created



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
							if ( row[1].HASH === b.Name ) {
								row[3].S = data.LocationConstraint || 'us-east-1'
							}
							return row
						}))


						// 'request.options' => array(
						// 'proxy' => 'username:password@127.0.0.1:123' // socks5://127.0.0.1
						// )


						var this_s3 = new AWS.S3({
							//endpoint: this.get('endpoint') || undefined,
							//endpoint: 'http://localhost:8080/' + b.Name,

							region: data.LocationConstraint || 'us-east-1',
							credentials: {
								accessKeyId: ractive.get('accessKeyId'),
								secretAccessKey: ractive.get('secretAccessKey'),
							},

							//sslEnabled: false,


							// to check
							//s3BucketEndpoint: b.Name + '.s3.amazonaws.com',

							// s3UseArnRegion default to true
							// endpointDiscoveryEnabled (Boolean) — whether to enable endpoint discovery for operations that allow optionally using an endpoint returned by the service. Defaults to 'false'




							//s3ForcePathStyle: false, // will add /?<REGION> but then signature will no longer match
							// whether to marshal request parameters to the prefix of hostname. Defaults to true.
							//hostPrefixEnabled: false,


							// v2: SignatureDoesNotMatch, The request signature we calculated does not match the signature you provided. Check your key and signing method.
							// v2: some regions do not support it

							// v3: uses host in signature and will fail with AccessDenied

							// v4: uses host in signature and will fail wit SignatureDoesNotMatch
							//signatureVersion: 'v4',

						});

						var params = {
							Bucket: b.Name,
						};
						this_s3.getBucketAcl(params, function(err, data) {
							if (err)
								return console.log(err)

							var is_public_read = data.Grants.map(function(g) {
								return { type: g.Grantee.Type, URI: g.Grantee.URI, perm: g.Permission, }
								return
									(g.Grantee.Type === 'Group')
									//&& (g.Grantee.URI === "http://acs.amazonaws.com/groups/global/AllUsers" )
									//&& ( g.Grantee.Permission === 'READ' )
									;
							}).filter(function(g) {
								return (g.type === 'Group') && (g.URI === "http://acs.amazonaws.com/groups/global/AllUsers" ) && (g.perm === 'READ');
							}).length > 0;

							if (is_public_read) {
								ractive.set('rows', ractive.get('rows').map(function(row) {
									if ( row[1].HASH === b.Name ) {
										row[2].S = 'PUBLIC'
									}
									return row
								}))
							}

							cb()
						});








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
			selection_length: 0,


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
		'open-item': function( e, col, item, rawitem ) {
			console.log('open-item', item.Name  )
			this.root.findComponent('tabs').newtab('buckettab', item.Name )
		},

		'tabledata.selectrow': function(context) {

			var keypath = context.resolve()
			this.set(keypath + '.0.selected', !this.get(keypath + '.0.selected') )

			this.set('selection_length',
				this.get('rows').filter(function(r) { return r[0].selected === true } ).length
			)
		},

		delete() {

			var ractive=this;

			var selected = this.get('rows').filter(function(r) { return r[0].selected === true } );

			if ( selected.length === 0 )
				return alert('Please select a bucket to delete')

			if ( selected.length > 1 )
				return alert('Please select one bucket at a time')

			var bucketname = selected[0][1].HASH

			if (confirm('Are you sure you want to delete bucket ' + bucketname )) {
				var params = {
					Bucket: bucketname
				};
				s3.deleteBucket(params, function(err, data) {
					if (err)
						return alert('Delete bucket failed')

					ractive.refresh_buckets()

				});
			}




		},




	}
})
