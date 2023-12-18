<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MainButton'
}
</script>

<style>
.btn {
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  height: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 15px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
}
.btn:hover {
    cursor: pointer;
    opacity: 0.8;
}
.btn:active {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}
.btn.danger {
    background: #e53935;
    color: #fff;
    border-color: #e53935;
}
.btn.primary {
    background: #42b983;
    color: #fff;
}
</style>