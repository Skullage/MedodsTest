<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BaseCheckbox",
  props: {
    option: {
      type: String,
      required: true
    }
  },
})
</script>

<template>
  <label class="toggle" :for="option">
    <input type="checkbox" class="toggle__input" :id="option" :checked="$attrs.value" @change="$emit('input', $event.target.checked)" />
    <span class="toggle-track">
				<span class="toggle-indicator">
					<span class="checkMark">
						<svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
							<path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
						</svg>
					</span>
				</span>
			</span>
    {{ option }}
  </label>
</template>

<style scoped lang="scss">
$toggle-indicator-size: 24px;
$track-height: $toggle-indicator-size + 6;
$track-width: $toggle-indicator-size * 2.5;
$highContrastModeSupport: solid 2px transparent;

$track-border: black;
$track-background: white;

.toggle {
  align-items: center;
  border-radius: 100%;
  display: inline-flex;
  font-weight: 700;
}

.toggle__input {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:disabled + .toggle-track {
    cursor: not-allowed;
    opacity: 0.7;
  }
}

.toggle-track {
  background: $track-background;
  border: 1px solid $track-border;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: $track-height;
  margin-right: .75rem;
  position: relative;
  width: $track-width;
  outline: none;
}

.toggle-indicator {
  align-items: center;
  background: #009688;
  border-radius: $toggle-indicator-size;
  bottom: .125rem;
  display: flex;
  height: $toggle-indicator-size;
  justify-content: center;
  left: .125rem;
  outline: $highContrastModeSupport;
  position: absolute;
  transition: 150ms;
  width: $toggle-indicator-size;
}

.checkMark {
  fill: #fff;
  height: $toggle-indicator-size - 4;
  width: $toggle-indicator-size - 4;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
}

.toggle__input:checked + .toggle-track .toggle-indicator {
  background: #009688;
  transform: translateX($track-width - $track-height);

  .checkMark {
    opacity: 1;
    transition: opacity 150ms ease-in-out;
  }
}

@media screen and (-ms-high-contrast: active) {
  .toggle-track {
    border-radius: 0;
  }
}
</style>