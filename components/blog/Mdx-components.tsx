const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")

export const mdxComponents = {
  h1: ({ children }: any) => {
    const id = slugify(children.toString())
    return <h1 id={id}>{children}</h1>
  },

  h2: ({ children }: any) => {
    const id = slugify(children.toString())
    return <h2 id={id}>{children}</h2>
  }
}