export function Unused() {
  const classes = {
    className: "some-class",
  }

  // The addition of destructured props _and_ the use of `key` is required to
  // trigger the bug
  return (
    <div {...classes} key="x">
      This component isn't even used, but when we destructure classes it causes
      the build to fail. And if we happen to set `client:only="react"` in our
      Astro file, it also causes the render to fail for this island.
    </div>
  )
}

export function MyComponent() {
  return (
    <div>
      Hi. I will render if you set me to `client:idle`, but not if you set me to
      `client:only="react"`. This isn't my fault though. See the `Unused`
      component in the same module I come from.
    </div>
  )
}
