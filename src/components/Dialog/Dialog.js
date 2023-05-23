import React, { useEffect, useState } from 'react';
//elements
import { DialogWrap, DialogContent, DialogAktualne } from './Dialog.elements';
import { LinkBtn } from '../../globalStyles';
//aktualneText
import { aktualneText } from '../../dataText';
// icons
import { IoClose } from 'react-icons/io5';
import { FiExternalLink } from 'react-icons/fi';
import { dataWebImages } from '../../dataImages';

function Dialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 0);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  // disableBodyScroll
  if (open) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'initial';
  }

  return (
    <>
      {open && (
        <DialogWrap>
          {/* <DialogTitle>
          </DialogTitle> */}
          <div>
            <DialogContent>
              <button onClick={handleClose} value="X">
                <IoClose />
              </button>

              {aktualneText === [] ?? (
                <h3 style={{ textAlign: 'center' }}>Aktuálně:</h3>
              )}
              {aktualneText &&
                aktualneText.map((item, index) => {
                  return (
                    <DialogAktualne
                      key={index}
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      <span>{item.date}</span>
                      <span>{item.info}</span>

                      {/* <img
                        id="image"
                        style={{
                          width: '100%',
                          maxWidth: '320px',
                          margin: '20px auto 0',
                        }}
                        src={dataWebImages.bbq}
                        alt="bbq"
                        title="bbq"
                      /> */}
                    </DialogAktualne>
                  );
                })}
                      <p style={{ textAlign: 'center', fontSize: '1.36rem' }}>
                        Nabízíme obědové menu, které s&nbsp;radostí
                        i&nbsp;dovezeme, <br />
                        stačí zavolat na&nbsp;604284804.
                        <br />
                        <a
                          href={dataWebImages.poledniMenu}
                          target="_self"
                          rel="noopener noreferrer">
                          Kouknout na menu <FiExternalLink />
                        </a>
                      </p>
                      <br />
              {/* <p>
                <br />
              </p> */}
              {/* <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '1rem',
                }}>
                <a
                  href={dataWebImages.poledniMenu}
                  target="_self"
                  rel="noopener noreferrer"> Aktuální obědové menu <FiExternalLink/>
                  <img
                    id="image"
                    style={{ width: '100%' }}
                    src={dataWebImages.poledniMenu}
                    alt="Polední menu"
                    title="Polední menu"
                  />
                </a>
              </div> */}
              {/* <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '1rem',
                }}>
                <a
                  href={dataWebImages.poledniMenu2}
                  target="_self"
                  rel="noopener noreferrer">
                  <img
                    id="image"
                    style={{ width: '100%' }}
                    src={dataWebImages.poledniMenu2}
                    alt="Polední menu"
                    title="Polední menu"
                  />
                </a>
              </div> */}
              {/* <LinkBtn to="/rozvoz" className="dialogBtn">
                Přejít k objednání
              </LinkBtn> */}

              {/* <h3>Vážení zákazníci, obědové menu také rozvážíme.</h3> */}
            </DialogContent>
          </div>
        </DialogWrap>
      )}
    </>
  );
}

export default Dialog;
