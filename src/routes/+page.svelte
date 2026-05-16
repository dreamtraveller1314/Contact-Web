<script lang="ts">
	type Contact = {
		name: string;
		address: string;
		phone: string;
	};

	let contacts: Contact[] = [{ name: 'Test', address: '123 Main St.', phone: '617-000-0000' }];
</script>

<main class="white-block">
	<div class="contact-element hover:scale-105 transition-transform">
		<div>
			<p>{contacts[0].name}</p>
			<p>{contacts[0].address}</p>
		</div>
		<div style="text-align: right;">
			<p>{contacts[0].phone}</p>
		</div>
	</div>
	<div style="text-align: center; margin-top: 1rem;">
		<a href="/add-contact" class="button-style"> Add contact </a>
	</div>
</main>