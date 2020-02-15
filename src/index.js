


	import "./css/style.less";
	import Ractive from 'ractive';
	import minibucketlist from './minibucketlist';

	import tabs from './tabs';

	var hsplit = Ractive.extend({
		isolated: false,
		data: {
			direction: 'horizontal'
		},
		template: '<div class="hsplit {{class}} " style="{{style}}">{{yield}}</div>',
	})


	export default Ractive.extend({
		components: {
			hsplit: hsplit,
			minibucketlist: minibucketlist,
			tabs: tabs,

		},
		template: `
			<div class='ractive-s3-ui theme-{{theme}}'>
				<WindowContainer theme={{theme}} />
			</div>
			<hsplit class='ractive-s3-ui theme-{{theme}}'>
				<left>
					<minibucketlist />
				</left>
				<split />
				<content>
					<tabs
						active_id='buckets'
						theme={{theme}}
					/>
				</content>
			</hsplit>
		`,


		data: function() {
			return {

			}
		},
		on: {
			init: function() {

				var ractive=this;
				this.on('open-bucket', function(e, bucket ) {
					this.findComponent('tabs').newtab('buckettab', bucket )
				})


				s3 = new AWS.S3({
					//endpoint: this.get('endpoint') || undefined,
					endpoint: 'http://localhost:8080',

					region: this.get('region'),
					credentials: {
						accessKeyId: this.get('accessKeyId'),
						secretAccessKey: this.get('secretAccessKey'),
					},

					sslEnabled: false,
					s3ForcePathStyle: true,
					signatureVersion: 'v2',

				});

				//console.log(this.get('region'), this.get('accessKeyId'), this.get('secretAccessKey') )


			}
		},
	});
