Vue.http.headers.common['X-CSRFToken'] = "{{ csrf_token }}";
new Vue({
	el: '#app',
	delimiters: ['${', '}'],
	data: {
		contacts: [],
		currentContact: {},
		message: null,
		newContact: {
			'contact_name': null,
			'contact_email': null
		},
		search_term: '',
	},
	mounted: function () {
		this.getContacts();
	},
	methods: {
		getContacts: function () {
			let api_url = '/api/contact/';
			if (this.search_term !== '' || this.search_term !== null) {
				api_url = `/api/contact/?search=${this.search_term}`;
			}
			this.$http.get(api_url)
				.then((response) => {
					this.contacts = response.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getContact: function (id) {
			this.$http.get(`/api/contact/${id}/`)
				.then((response) => {
					this.currentContact = response.data;
					$("#editContactModal").modal('show');
				})
				.catch((err) => {
					console.log(err);
				});
		},
		addContact: function () {
			this.$http.post('/api/contact/', this.newContact)
				.then((response) => {
					this.getContacts();
				})
				.catch((err) => {
					console.log(err);
				});
		},
		updateContact: function () {
			this.$http.put(`/api/contact/${this.currentContact.contact_id}/`, this.currentContact)
				.then((response) => {
					this.currentContact = response.data;
					this.getContacts();
				})
				.catch((err) => {
					console.log(err);
				});
		},
		deleteContact: function (id) {
			this.$http.delete(`/api/contact/${id}/`)
				.then((response) => {
					this.getContacts();
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
});
