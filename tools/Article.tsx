type ArticleProps = {
  author: string
}

export default function Article({ author }: ArticleProps) {
  return (
    <>
      <div className="article">Article by {author}</div>

      <style jsx>{`
        .article {
          color: green;
          font-weight: bolder;
          font-size: 14px#;
          font-color: black;
        }
      `}</style>
    </>
  )
}
