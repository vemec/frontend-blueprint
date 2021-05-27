const Image = ({ loading = 'lazy', size = null, role, fallback, path, name, formats, resolutions, alt, className, aload = true }) => {
  let defaultsMedia;
  if (resolutions) {
    if (resolutions.sort().toString() === [768, 1366, 1920].sort().toString()) {
      defaultsMedia = {
        768: '(max-width: 1024px)',
        1366: '(min-width: 1025px) and (max-width: 1919px)',
        1920: '(min-width: 1920px)',
      }
    }

    if (resolutions.sort().toString() === [768, 1366].sort().toString()) {
      defaultsMedia = {
        768: '(max-width: 1024px)',
        1366: '(min-width: 1025px)',
      }
    }

    if (resolutions.sort().toString() === [1366, 1920].sort().toString()) {
      defaultsMedia = {
        1366: '(max-width: 1919px)',
        1920: '(min-width: 1920px)',
      }
    }

    if (resolutions.sort().toString() === [360, 768, 1920].sort().toString()) {
      defaultsMedia = {
        360: '(max-width: 767px)',
        768: '(min-width: 768px) and (max-width: 1919px)',
        1920: '(min-width: 1920px)',
      }
    }

    if (resolutions.sort().toString() === [360, 1366, 1920].sort().toString()) {
      defaultsMedia = {
        360: '(max-width: 767px)',
        1366: '(min-width: 768px) and (max-width: 1919px)',
        1920: '(min-width: 1920px)',
      }
    }

    if (resolutions.sort().toString() === [360, 768, 1366, 1920].sort().toString()) {
      defaultsMedia = {
        360: '(max-width: 540px)',
        768: '(min-width: 541px) and (max-width: 1024px)',
        1366: '(min-width: 1025px) and (max-width: 1919px)',
        1920: '(min-width: 1920px)',
      }
    }
  }

  const defaultSources = (
    <>
      <source
        type={`image/${formats.source}`}
        srcSet={`
          /images${path}/${name}@1x.${formats.source} 1x,
          /images${path}/${name}@2x.${formats.source} 2x
        `}
      />
      <img
        alt={alt}
        role={role}
        loading={loading}
        type={`image/${formats.img}`}
        width={size ? size.width : null}
        height={size ? size.height : null}
        data-aload={aload ? `/images${path}/${name}@1x.${formats.img}` : null}
        src={aload ? null : `/images${path}/${name}@1x.${formats.img}`}
      />
    </>
  )

  const dinamicSources = (
    <>
      {
        resolutions && resolutions.map((resolution) => (
          Object.values(formats).map((format) => (
            <source
              key={`${name}${resolution}${format}`}
              media={defaultsMedia[resolution]}
              type={`image/${format}`}
              srcSet={`
                /images${path}/${name}${resolution}@1x.${format} 1x,
                /images${path}/${name}${resolution}@2x.${format} 2x
              `}
            />
          ))
        ))
      }
      <img
        alt={alt}
        role={role}
        loading={loading}
        type={`image/${formats.img}`}
        width={size ? size.width : null}
        height={size ? size.height : null}
        data-aload={aload ? `/images${path}/${fallback}@1x.${formats.img}` : null}
        src={aload ? null : `/images${path}/${fallback}@1x.${formats.img}`}
      />
    </>
  )

  return (
    <picture className={className}>
      { (resolutions ? dinamicSources : defaultSources) }
    </picture>
  )
}

export default Image;
