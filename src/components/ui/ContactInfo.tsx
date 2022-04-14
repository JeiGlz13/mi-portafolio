export const ContactInfo = () => {
    const personalInfo = [
        {
            title: 'Email',
            value: 'jeiglz13@gmail.com',
        },
        {
            title: 'Idiomas',
            value: 'Español, Inglés (B1)',
        },
        {
            title: 'Nacionalidad',
            value: 'Nicaraguense',
        }
    ]

  return (
    <div className="ContactInfo">
        <h1>Detalles</h1>
        <hr/>

        {
            personalInfo.map(({title, value}, index) => (
                <div className="ContactInfo-item" key={index}>
                    <h2>{title}: </h2>
                    <h3>{value}</h3>
                </div>
            ))
        }
    </div>
  )
}
