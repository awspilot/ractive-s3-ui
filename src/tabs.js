import { IconS3Bucket, IconX } from './svgicons';

import bucketlistfull from './bucketlistfull';
import bucketcreate from './bucket/create';
import buckettab from './buckettab';

export default Ractive.extend({
	//isolated: true,
	components: {
		'icon-s3-bucket': IconS3Bucket,
		'icon-x': IconX,
		bucketlistfull: bucketlistfull,
		bucketcreate: bucketcreate,
		buckettab: buckettab,
	},
	template:
		`
		<tabhead>
			<tab class='{{#if active_id === "buckets" }}active{{/if}}' on-click='@this.fire("activetab", "buckets")'>
				<icon-s3-bucket style="width: 16px;height: 16px;" />
			</tab>
		{{#tabs}}
			{{#if .closed !== true}}
			<tab class='{{#if .id === active_id }}active{{/if}}' on-click='@this.fire("activetab",.id)'>
				{{.name}}
				<i class='' on-click='closetab'><icon-x style="width: 8px;height: 8px;line-height: 15px;" /></i>
			</tab>
			{{/if}}
		{{/tabs}}
		</tabhead>
		<tabcontent>
			{{#if active_id === "buckets" }}
				<bucketlistfull accessKeyId={{accessKeyId}} secretAccessKey={{secretAccessKey}} endpoint={{endpoint}} />
			{{else}}
				{{#tabs}}
					{{#if .closed === true}}
						<div class='closedtab'></div>
					{{else}}
						{{#if .type === 'bucketcreate' }}
							<bucketcreate active={{ .id === active_id  }} id={{id}} />
						{{/if}}
						{{#if .type === 'buckettab' }}
							<buckettab
								bucket={{.}}
								active={{ .id === active_id  }}
								theme={{~/theme}}
							/>
						{{/if}}
					{{/if}}
				{{/tabs}}
			{{/if}}
		</tabcontent>
		`,
	data: function() { return {} },
	active_cache: [],
	activetabcontent: function() {
		var ractive = this
		ractive.active_cache.push(ractive.get('active_id'))
		ractive.findAllComponents('buckettab').map(function( tableview_c ) {
			tableview_c.set('active', tableview_c.get('bucket.id') === ractive.get('active_id') )
		})
	},
	newtab: function(component_name, param1 ) {
		var id=Math.random().toString().split('.').join('')
		this.set('active_id', id )
		this.push('tabs', {
			id: id,

			name: param1,
			type: component_name,

		} )
		this.activetabcontent()
	},
	closetab: function( id ) {

		var tabidx = null;
		this.get('tabs').map(function(t, idx ) {
			console.log("tab", t, idx );
			if (t.id === id ) tabidx = idx;
		})
		if (tabidx === null)
			return alert('close: tab not found'); // not found

		this.set('tabs.' + tabidx + '.closed', true )

	},
	oninit: function() {
		var ractive = this


		this.observe('active_id', function(newvalue, oldvalue, keypath ) {
			ractive.activetabcontent()
		})

		this.on('closetab', function(e) {

			console.log("close", e.resolve() )
			var id = this.get( e.resolve() + '.id')

			this.set( e.resolve() + '.closed', true )

			this.active_cache = this.active_cache.filter(function(tid) { return tid !== id })
			//this.set('tabs', this.get('tabs').filter(function(t) { return t.id !== id }) )

			if (this.get('active_id') === id ) {
				// the current tab was closed
				this.set('active_id', this.active_cache.pop() )
			}
			ractive.activetabcontent()
			return false;
		})
		this.on('activetab', function(e, id) {
			this.set('active_id', id )
			return false;
		})
	},
})
