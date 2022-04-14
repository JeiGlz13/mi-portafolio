export const SocialMedia = () => {
    const socialMedia = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jeisson-gonzalez-4b988b221/',
            iconClassName: 'fa-brands fa-linkedin-in'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/JeiGlz13',
            iconClassName: 'fa-brands fa-github'
        },
    ]

  return (
    <div className="SocialMedia" >
        {
            socialMedia.map(({name, url, iconClassName}, index) => (
                <a 
                key={index} target = '_blank'
                rel = 'noopener noreferrer'
                href={url}
                title= {name}
                className="SocialMedia-item">
                    <i className={iconClassName}  ></i>
                </a>
            ))
        }
    </div>
  )
}
