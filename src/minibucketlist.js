import { IconPlus, IconRefresh } from './svgicons'

export default Ractive.extend({
	components: {
		'icon-plus': IconPlus,
		'icon-refresh': IconRefresh,
	},
	template:
		`
		<miniheader>
			Buckets
			<div class='pull-right' style='margin-right: 2px;'>
				<a class='btn btn-xs btn-default' on-click='create'>
					<icon-plus />
				</a>
				<a class='btn btn-xs btn-default' on-click='@this.refresh_buckets()'>
					<icon-refresh />
				</a>
			</div>
		</miniheader>
		<scrollarea class='scrollarea miniheaderbody' style='position: absolute;'>
		<tables>
			{{#buckets}}
			<div on-click='@this.fire( "open-bucket",.)'> {{.Name}} </div>
			{{/buckets}}
		</tables>
		</scrollarea>
		`,
	data: function() { return {} },
	refresh_buckets: function() {
		var ractive = this

		ractive.set('buckets')

		s3.listBuckets({}, function(err, data) {
			if (err)
				return ractive.set('err', err )


			ractive.set({buckets: data.Buckets })

		})

	},
	on: {
		init() {
			this.refresh_buckets()
			// var ractive = this
			// ractive.on('open-bucket', function(e, table ) {
			// 	ractive.parent.fire('open-table', table )
			// })
			// ractive.on('create', function() {
			// 	ractive.root.findComponent('tabs').newtab('tablecreate', 'Create Table' )
			// })
		},
	},
})
