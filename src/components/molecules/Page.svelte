<div class="col center-x">
    <slot/>
</div>

<style>
    div {
		max-width: 100%;
		max-height: 100%;
		margin-right: 2px;
		margin-bottom: 2px;
		padding: var(--xxl);
		box-shadow: 5px 5px 0 var(--ctext), inset 5px 5px 0 var(--ctext);
		overflow: auto;
	}
</style>