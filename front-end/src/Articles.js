export function Articles(params) {
  let articles = params.data.articles ? params.data.articles : [];
  let queryName = params.query.queryName ? params.query.queryName : "na";
  let articleCount = params.data.totalResults ? params.data.totalResults : 0;
  let language = params.query.language;
  let search = params.query.q;

  // Make the returned language more readable
  if (language === "en") {
    language = "English";
  } else if (language === "es") {
    language = "Spanish";
  } else if (language === "fr") {
    language = "French";
  } else if (language === "de") {
    language = "German";
  }

  return (
    <div>
      <h3>
        You're searching for {search} in {language}
      </h3>
      <ol>
        {articles.map((item, idx) => {
          if (item) {
            if (item.title) {
              if (item.title === "[Removed]") {
                return <li key={idx}>Was Removed</li>;
              }
              let trimTitle = item.title.substring(0, 60);
              return (
                <li key={idx}>
                  {trimTitle}
                  <a href={item.url} target="_blank" rel="noreferrer">
                    &nbsp;Link
                  </a>
                </li>
              );
            } else {
              return <li key={idx}>No Title</li>;
            }
          } else {
            return <li key={1}>No Item</li>;
          }
        })}
      </ol>
      <br />
      Query: {queryName}
      <br />
      Count: {articleCount}
    </div>
  );
}
