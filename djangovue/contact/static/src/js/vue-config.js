
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
		getContacts: function (clear = false) {
			if (clear === true ) {
				this.search_term = '';
			}
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
			let contacts = this.$data.contacts;
			let is_match = false;
			for (let i = 0; i < contacts.length; i++) {
				if (this.newContact.contact_email === contacts[i].contact_email) {
					is_match = true;
				}
			}
			if (is_match === false) {
				this.$http.post('/api/contact/', this.newContact)
					.then((response) => {
						this.getContacts();						$("#addContactModal").modal('hide');
					this.newContact.contact_email = '';
					this.newContact.contact_name = '';
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				alert('Email address is already assigned to a contact.');
			}
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
					$("#editContactModal").modal('hide');
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
});
