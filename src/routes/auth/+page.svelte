<script lang="ts">
	let login = true;

	function handleClick() {
		login = !login;

		if (login) {
			document.documentElement.setAttribute('data-theme', 'light');
		} else {
			console.log('H');

			document.documentElement.setAttribute('data-theme', 'dark');
		}
	}
</script>

<button on:click={handleClick}>swap</button>

{#if login}
	<h1 class="red">Login</h1>
	<input type="text" />
	<input type="text" />
	<button>Login</button>
{:else}
	<h1 class="red">Register</h1>
	<input type="text" />
	<input type="password" />
	<button>Register</button>
{/if}

<style lang="scss">
	.red {
		color: blue;
	}

    html[data-theme='dark'] {
		.red {
			color: red !important;
		}
	}

</style>
