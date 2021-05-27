// Core
import useTranslation from 'next-translate/useTranslation'
import classNames from 'classnames'

// Custom Hooks
import useAcceptCookies from '@/hooks/useAcceptCookies'

const LGPD = () => {
  const { t } = useTranslation('common')
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()

  return (
    <div id="cookieBanner" className={classNames('c-banner', { 'c-banner--show': !acceptedCookies })}>
      <div className="c-wrapper">
        {t('lgpd-disclaimer')}
        <button
          type="button"
          id="cookieButton"
          className="c-button c-button-track"
          text={t('lgpd-disclaimer-button')}
          size="small"
          variant="negative"
          onClick={() => onAcceptCookies(true)}
        />
      </div>
    </div>
  )
}

export default LGPD
