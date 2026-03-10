export type Heading = {
  id: string
  text: string
  children: { id: string; text: string }[]
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
}

export function getHeadings(content: string): Heading[] {
  const regex = /^(#|##)\s+(.*)/gm

  const toc: Heading[] = []
  let currentH1: Heading | null = null

  let match

  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2]
    const id = slugify(text)

    if (level === 1) {
      currentH1 = { id, text, children: [] }
      toc.push(currentH1)
    }

    if (level === 2 && currentH1) {
      currentH1.children.push({ id, text })
    }
  }

  return toc
}