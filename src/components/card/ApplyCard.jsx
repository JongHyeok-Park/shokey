function ApplyCard(props) {
  const {
    title,
    influencerName,
    content,
    videoLink,
    createdAt
  } = props;

  return (
    <article className="apply-card">
      <figure>
        <video src={ videoLink } controls={true}/>
      </figure>
      <span>{ createdAt }</span>
      <h3>{ title }</h3>
      <span>{ influencerName }</span>
      <p>{ content }</p>
      <div>
        <button>입찰하기</button>
      </div>
    </article>
  )
}

export default ApplyCard;