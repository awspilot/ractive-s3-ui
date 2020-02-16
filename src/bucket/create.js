
export default Ractive.extend({
	template: `

	<div class='tableview {{#if active}}active{{/if}}'>
		<div style='position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;overflow-x: auto;'>

			<div style="padding: 50px;">



				<h3>Create Bucket</h3>

				<label>Bucket name</label><br>
				<input class="input-text" placeholder="Enter DNS-=compilant bucket name" type="text" value={{newbucket.Bucket}} style="min-width: 300px;" />

				<br><br>
				<label>Region</label><br>
				<select class="input-select" value={{newbucket.CreateBucketConfiguration.LocationConstraint}} style="min-width: 300px;" >
					{{#regions}}
						<option value="{{.id}}"> {{.name}} </option>
					{{/regions}}

					<option value="us-east-2">Us East (Ohio)</option>
					<option value="us-west-1">Us West (N.California)</option>
					<option value="us-west-2">Us West (Oregon)</option>
				</select>

				<!--

				/*
				Versioning
				[ ] Keep all versions of an object in the same bucket. (Learn more [https://docs.aws.amazon.com/console/s3/enable-bucket-versioning])
				*/

				/*
				Server access logging
				[ ] Log requests for access to your bucket. (Learn more [https://docs.aws.amazon.com/console/s3/server-access-logging])
				*/

				/*
				Tags
				You can use tags to track project costs. ( Learn more [ https://docs.aws.amazon.com/console/s3/cost-allocation-tagging ] )

				[___KEY_______] [__VALUE________] [close]
				[+add another]
				*/

				/*
				Object-level logging
				[ ] Record object-level API activity using AWS CloudTrail for an additional cost. See CloudTrail pricing  or learn more
				*/

				/*
				Default encryption
				[ ] Automatically encrypt objects when they are stored in S3. Learn more
				*/

				/* --- ADVANCED ----- */
				Object lock
				[ ] Permanently allow objects in this bucket to be locked. Learn more
				    Object lock requires bucket versioning to be enabled.

				   /* Management */
					CloudWatch request metrics
					[ ] Monitor requests in your bucket for an additional cost. See CloudWatch pricing  or learn more


				/* more perm */

				-->

				<br><br>
				<a class="btn btn-sm btn-primary" on-click="create">Create</a>

			</div>


		</div>
	</div>
	`,
	on: {
		create() {
			var ractive=this;
			var params = this.get('newbucket')

			if (params.CreateBucketConfiguration.LocationConstraint === 'us-east-1' )
				delete params.CreateBucketConfiguration;

			s3.createBucket(params, function(err, data) {

				if (err)
					return alert( err.code || err.message || 'Bucket create failed' )

				console.log(err,data)

				//ractive.root.findComponent('minitablelist').refresh_tables()

				ractive.parent.newtab('buckettab', ractive.get('newbucket.Bucket') )

				// close the current tab
				ractive.parent.closetab( ractive.get('id'))


			});
		},
	},
	data: function() {
		return {
			newbucket: {
				Bucket: '',
				CreateBucketConfiguration: {
					LocationConstraint: 'us-east-1',
				},
			},

			regions: [
				{ id: 'us-east-1',      name: 'US East (N. Virginia)'},
				{ id: 'us-east-2',      name: 'US East (Ohio)'},
				{ id: 'us-west-1',      name: 'US West (N. California)'},
				{ id: 'us-west-2',      name: 'US West (Oregon)'},
				{ id: 'ap-south-1',     name: 'Asia Pacific (Mumbai)'},
				{ id: 'ap-northeast-2', name: 'Asia Pacific (Seoul)'},
				{ id: 'ap-southeast-1', name: 'Asia Pacific (Singapore)'},
				{ id: 'ap-southeast-2', name: 'Asia Pacific (Sydney)'},
				{ id: 'ap-northeast-1', name: 'Asia Pacific (Tokyo)'},
				{ id: 'ca-central-1',   name: 'Canada (Central)'},
				{ id: 'eu-central-1',   name: 'EU (Frankfurt)'},
				{ id: 'eu-west-1',      name: 'EU (Ireland)'},
				{ id: 'eu-west-2',      name: 'EU (London)'},
				{ id: 'eu-west-3',      name: 'EU (Paris)'},
				{ id: 'eu-north-1',     name: 'EU (Stockholm)'},
				{ id: 'sa-east-1',      name: 'South America (Sao Paulo)'},

			],


		}
	},
})
