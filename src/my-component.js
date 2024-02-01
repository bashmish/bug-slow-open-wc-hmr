import { html, LitElement } from "lit-element";
import "@lion/ui/define/lion-radio-group.js";
import "@lion/ui/define/lion-radio.js";

const choices = [
  "choice 1",
  "choice 2",
  "choice 3",
  "choice 4",
  "choice 5",
  "choice 6",
  "choice 7",
  "choice 8",
  "choice 9",
  "choice 10",
  "choice 11",
  "choice 12",
  "choice 13",
  "choice 14",
  "choice 15",
  "choice 16",
  "choice 17",
  "choice 18",
  "choice 19",
  "choice 20",
];

class MyComponent extends LitElement {
  static properties = {
    mode: { type: String },
  };

  constructor() {
    super();
    this.mode = "hidden";
  }

  render() {
    return html`
      <lion-radio-group
        name="mode"
        label="Choose visibility"
        @model-value-changed=${(ev) => {
          this.mode = ev.target.modelValue;
        }}
      >
        <lion-radio
          label="Hidden"
          .choiceValue=${"hidden"}
          .checked=${this.mode === "hidden"}
        ></lion-radio>
        <lion-radio
          label="Shown"
          .choiceValue=${"shown"}
          .checked=${this.mode === "shown"}
        ></lion-radio>
      </lion-radio-group>

      ${this.mode === "hidden"
        ? ""
        : html`
            <lion-radio-group class="radio-group" label="Make a choice">
              <div class="radios">
                ${choices.map(
                  (choice, i) => html`
                    <lion-radio
                      class="radio"
                      .label=${choice}
                      .choiceValue=${choice}
                      .checked=${i === 0}
                    ></lion-radio>
                  `
                )}
              </div>
            </lion-radio-group>
          `}
    `;
  }
}

customElements.define("my-component", MyComponent);
