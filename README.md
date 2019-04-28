# Custom Element duplicate element name registration

If a tag name is specified within the rollup config (and not in the .svelte files), that name ends up being specified multiple times (once per .svelte file, two in this sample)
- `customElements.define("sample-element", Nested);`
- `customElements.define("sample-element", Sample);`

