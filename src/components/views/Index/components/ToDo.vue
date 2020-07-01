<template>
  <li class="to-do-tile">
      <label class="b-contain">
        <span :class="{completed:isCompleted}">{{todo}}</span>
        <input type="checkbox" :checked="isCompleted===true" @click="$emit('check-todo',id)">
        <div class="b-input"></div>
      </label>
  </li>
</template>

<script>
export default {
	name:"ToDo",
	props: {
		id: Number,
		todo: String,
		isCompleted: Boolean,
	},    
}
</script>

<style scoped>

  .to-do-tile {
    width: calc(100%-10px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 10px;
    margin-top: 5px;
    border: 1px solid #9BD8CD;
    border-radius: 10px;
  }

	.completed {
		text-decoration: line-through;
	}


  .to-do-tile span {
    margin: 2px;
    margin-bottom: 3px;
    color: #348A7B;
  }

  .b-contain *, .b-contain *::before, .b-contain *::after {
	box-sizing: content-box !important;
}

.b-contain input {
	position: absolute;
	z-index: -1;
	opacity: 0;
}


.b-contain {
	display: table;
	position: relative;
	padding-left: 40px;
	cursor: pointer;
}

.b-contain input[type="checkbox"] ~ .b-input {
	position: absolute;
	top: 0;
	left: 0;
	height: 1.25rem;
	width: 1.25rem;
	background: rgba(241, 245, 248, 1);
	transition: background 250ms;
	border: 1px solid rgba(184, 194, 204, 1);
	border-radius: 0.125rem;
}

.b-contain input[type="checkbox"] ~ .b-input::after {
	content: '';
	position: absolute;
	display: none;
	left: .45rem;
	top: .18rem;
	width: .25rem;
	height: .6rem;
	border: solid rgba(255, 255, 255, 1);
	border-width: 0 2px 2px 0;
	transition: background 250ms;
	transform: rotate(45deg);
}

.b-contain input:disabled ~ .b-input::after {
	border-color: rgba(135, 149, 161, 1);
}

.b-contain input:checked ~ .b-input::after {
	display: block;
}

.b-contain:hover input ~ .b-input,
.b-contain input:focus ~ .b-input {
	background: rgb(231, 238, 243);
}


.b-contain input:checked ~ .b-input {
	background: #9BD8CD;
	border-color: #9BD8CD;
}

.b-contain input[type="checkbox"]:disabled ~ .b-input {
	background: rgba(241, 245, 248, 1);
	border-color: rgba(184, 194, 204, 1);
	opacity: 0.6;
	cursor: not-allowed;
}



.b-contain input:checked:focus ~ .b-input, .b-contain:hover input:not([disabled]):checked ~ .b-input {
	background: #9BD8CD;
	border-color: #9BD8CD;
}

.b-contain .b-input::before {
	content: '';
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 3rem;
	height: 3rem;
	margin-left: -0.85rem;
	margin-top: -0.85rem;
	background: rgba(0, 130, 243, 1);
	border-radius: 2rem;
	opacity: .6;
	z-index: 99999;
	transform: scale(0);
}

.b-contain .b-input::before {
	visibility: hidden;
}

.b-contain input:focus + .b-input::before {
	visibility: visible;
}

.b-contain:first-child .b-input::before {
	visibility: hidden;
}


</style>