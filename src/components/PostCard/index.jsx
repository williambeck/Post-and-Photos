import '../PostCard/styles.css';

export const PostCard = ({title, cover, body, id, }) => (
        <div className="post">
        <img src={cover} alt={title} />
        <div className="post-content">
          <h1>{title}</h1>
          <h2>{title} {id}</h2>
          <p>{body}</p>
        </div>
      </div>
     );
