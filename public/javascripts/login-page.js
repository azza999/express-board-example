
window.onload = function() {
	console.log('done')


	const $form = document.getElementById('form')
	const $password_validate = document.getElementById('password_validate')
	const $password = document.getElementById('password')
	const $submit = document.getElementById('submit')

	function checkPassword () {
		return $password_validate.value == $password.value
	}

	$password.addEventListener('keyup',e=>{
		if (checkPassword()) {
			$submit.disabled = false
		} else {
			$submit.disabled = true
		}
	})

}