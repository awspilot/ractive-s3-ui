






	export default Ractive.extend({
		template: `
			{{#buckets}}
				<div>{{.Name}}</div>
			{{/buckets}}
		`,

		data: function() {
			return {
			}
		},
		on: {
			init() {
				var ractive=this;
				s3.listBuckets({}, function(err, data) {
					if (err)
						return;

					console.log(err,data)
					ractive.set({buckets: data.Buckets })

				})



				// var params = {
				// 	Bucket: "awspilot-cf-us-west-1"
				// };
				// s3.getBucketLocation(params, function(err, data) {
				// 	console.log("bl", err, data )
				// })

			}
		}
	})
