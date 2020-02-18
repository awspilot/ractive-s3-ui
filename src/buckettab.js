
import BucketBrowser from './bucket/browser';

export default Ractive.extend({
	components: {
		BucketBrowser: BucketBrowser,
	},
	template: `

	<div class='tableview {{#if active}}active{{/if}}'>
		<div class='tableview-table-tabs noselect'>
			<a class='btn-tableview-tab {{#if tab === 'info'}}active{{/if}}'          on-click='@this.set('tab','info')'> Overview </a>
			<a class='btn-tableview-tab {{#if tab === 'properties'}}active{{/if}}'    on-click='@this.set('tab','properties')'> Properties </a>
			<a class='btn-tableview-tab {{#if tab === 'permissions'}}active{{/if}}'   on-click='@this.set('tab','permissions')'> Permissions </a>
			<a class='btn-tableview-tab {{#if tab === 'management'}}active{{/if}}'    on-click='@this.set('tab','management')'> Management </a>
			<a class='btn-tableview-tab {{#if tab === 'access_points'}}active{{/if}}' on-click='@this.set('tab','access_points')'> Access points </a>
		</div>
		<div style='position: absolute;top: 40px;left: 30px;right: 30px;bottom: 2px;'>


			{{#if tab === 'info'}}
				<BucketBrowser bucket={{bucket.name}} />
			{{/if}}

			{{#if tab === 'properties'}}
				<br>
				Properties {{bucket.name}}
			{{/if}}

			{{#if tab === 'permissions'}}
				<br>
				Permissions {{bucket.name}}
			{{/if}}

			{{#if tab === 'management'}}
				<br>
				Management {{bucket.name}}
			{{/if}}


			{{#if tab === 'access_points'}}
				<br>
				Access points {{bucket.name}}
			{{/if}}

		</div>
	</div>

	`,
	data: function() {
		return {
			tab: 'info',
		}
	}
})
