import style from "./RepositoriesItem.module.css";

export const RepositoriesItem = ({
  name,
  description,
  html_url,
  created_at,
  user,
}) => {
  const pullsUrl = `https://github.com/${user}/${name}/pulls`;
  return (
    <div className={style._}>
      <h1 className={style.title}>{name}</h1>
      <h2 className={style.creationDate}>
        {new Date(created_at).toUTCString()}
      </h2>
      <div className={style.descriptionWrapper}>
        <div className={style.description}>{description}</div>
        <a
          className={style.link}
          href={html_url}
          target="_blank"
          rel="noreferrer"
        >
          ссылка на репозиторий
        </a>
        <a
          className={style.link}
          href={pullsUrl}
          target="_blank"
          rel="noreferrer"
        >
          ссылка на pull requests
        </a>
      </div>
    </div>
  );
};
