function OutsideLinkButton({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`outside-link-button ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default OutsideLinkButton

