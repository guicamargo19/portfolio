import { FormEvent, useState } from 'react'

export const Contact = () => {
  const initialContactState = {
    name: '',
    email: '',
    subject: 'Guilherme Camargo',
    message: '',
    accessKey: 'e322da72-681e-4463-ada4-c60f0f17da61'
  }
  const [loading, setLoading] = useState(false)
  const [contact, setContact] = useState(initialContactState)
  const [response, setResponse] = useState({
    type: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      })
      const json = await res.json()

      if (json.success) {
        setResponse({
          type: 'Mensagem enviada!',
          message: 'Obrigado. Entrarei em contato o mais breve possível.'
        })
        // Resetar os campos após o evento de submit
        setContact(initialContactState)
      } else {
        setResponse({
          type: 'Erro de envio',
          message: json.message
        })
      }
    } catch (e) {
      console.log('Um erro ocorreu', e)
      setResponse({
        type: 'Erro de envio',
        message: 'Um erro ocorreu durante o envio do formulário.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">
            Contato
          </span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Sinta-se a vontade para me contatar enviando uma mensagem através do
            formulário abaixo, e retornarei o mais breve possível.
          </span>
        </h2>
        <div className="contact__form-container">
          <form
            id="staticform"
            action="https://api.staticforms.xyz/submit"
            method="post"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="accessKey"
              value="e322da72-681e-4463-ada4-c60f0f17da61"
            />
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">
                Nome
              </label>
              <input
                required
                placeholder="Digite seu nome"
                type="text"
                className="contact__form-input"
                name="name"
                value={contact.name}
                onChange={handleChange}
                id="name"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">
                Email
              </label>
              <input
                required
                placeholder="Digite seu email"
                type="email"
                className="contact__form-input"
                name="email"
                value={contact.email}
                onChange={handleChange}
                id="email"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">
                Mensagem
              </label>
              <textarea
                required
                className="contact__form-input"
                placeholder="Digite sua mensagem"
                name="message"
                value={contact.message}
                id="message"
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="button btn--theme contact__btn"
              disabled={!contact.name || !contact.email || !contact.message}
              data-bs-target="#modal"
              data-bs-toggle="modal"
            >
              Enviar
            </button>
            {response && (
              <div id="modal" className="modal" data-bs-backdrop="static">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="fw-bold">
                        {loading ? 'Enviando...' : response.type}
                      </h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    <div className="modal-body fs-4 text-center pt-4">
                      <p>{loading ? 'Enviando...' : response.message}</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="button btn--theme p-3"
                        data-bs-dismiss="modal"
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
