



	import Ractive from 'ractive';
	import bucketlist from './bucketlist';

	export default Ractive.extend({
		template: `
			<bucketlist />
		`,
		components: {
			bucketlist: bucketlist,
		},
		css: $CSS,
		data: function() {
			return {
				page: 'bucketlist',
			}
		},
		on: {
			init: function() {
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
