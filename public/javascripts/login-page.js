
window.onload = function() {
	console.log('done')


	const $form = document.getElementById('form')
	const $id = document.getElementById('id')
	const $password_validate = document.getElementById('password_validate')
	const $password = document.getElementById('password')
	const $submit = document.getElementById('submit')
	const $check_duplicate = document.getElementById('check_duplicate')
	const $comment = document.getElementById('comment')

	function checkPassword () {
		return $password_validate.value == $password.value
	}

	function updateSubmitBtn (bool) {
		if (bool()) {
			$submit.disabled = false
		} else {
			$submit.disabled = true
		}
	}


	$password.addEventListener('keyup',()=>updateSubmitBtn(checkPassword()))
	$password_validate.addEventListener('keyup',()=>updateSubmitBtn(checkPassword()))

	$check_duplicate.addEventListener('click',e=>{
		$.post('/user/check_id',{id: $id.value},data=>{
			if (data == 'true') {
				$comment.classList.remove('text-danger')
				$comment.classList.add('text-success')
				$comment.innerHTML = '사용 가능한 ID 입니다!'
			} else {
				$comment.classList.remove('text-success')
				$comment.classList.add('text-danger')
				$comment.innerHTML = '이미 존재하는 ID입니다!'
			}
		})
	})

}