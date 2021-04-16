import styles from '../styles/mail.module.css'

export default function Mail() {

    return (
        <main>

      <div>
        <div id="mlb2-3516154" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-3516154">
              <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/t4d6z1" data-code="t4d6z1" method="post" target="_blank" id={styles.container}>
                        <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask name="fields[email]" placeholder="Email" autoComplete="email" id={styles.input} required={true} />
                  <input type="hidden" name="ml-submit" defaultValue={1} />
                    <button type="submit" className="primary gradBack" id={styles.button1}>Subscribe</button>
                    <button disabled="disabled" style={{ display: 'none' }} type="button" className="loading" id={styles.button2}> <div className="ml-form-embedSubmitLoad" /> <span className="sr-only">Loading...</span> </button>
                  <input type="hidden" name="anticsrf" defaultValue="true" />
                </form>
              </div>
              <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
                <div className="ml-form-successContent" id={styles.success}>
                  <h4 id={styles.thanks} className="gradText">Thank you!</h4>
                  <p id={styles.message}>You have successfully joined our subscriber list.</p>
                </div>
              </div>
            </div>
        <img src="https://track.mailerlite.com/webforms/o/3516154/t4d6z1?v1614257997" width={1} height={1} style={{ maxWidth: '1px', maxHeight: '1px', visibility: 'hidden', padding: 0, margin: 0, display: 'block' }} alt="." border={0} />
      </div>
      <script
            dangerouslySetInnerHTML={{
              __html: `
              function ml_webform_success_3516154(){var r=ml_jQuery||jQuery;r(".ml-subscribe-form-3516154 .row-success").show(),r(".ml-subscribe-form-3516154 .row-form").hide()}
        `,
            }}
          />
      <script src="https://static.mailerlite.com/js/w/webforms.min.js?v42b571e293fbe042bc115150134382c9" type="text/javascript"></script>
      </main>

    );
}