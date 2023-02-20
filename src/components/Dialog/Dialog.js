import React, { useEffect, useState } from 'react';
//elements
import { DialogWrap, DialogContent, DialogAktualne } from './Dialog.elements';
import { LinkBtn } from '../../globalStyles';
//aktualneText
import { aktualneText } from '../../dataText';
// icons
import { IoClose } from 'react-icons/io5';
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

  const openFullscreen = () => {
    document.getElementById('image')?.requestFullscreen();
  };

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
              {/* <h3 style={{ textAlign: 'center' }}>
                Aktuálně:
              </h3>
              {aktualneText &&
                aktualneText.map((item, index) => {
                  return (
                    <DialogAktualne key={index} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                      <span>{item.date}</span>
                      <span>{item.info}</span>

                    </DialogAktualne>
                  );
                })}
              <p><br /></p> */}
              <h3 style={{ textAlign: 'center' }}>
                Vážení zákazníci, obědové menu také rozvážím. <br></br>Stačí
                zavolat na 604284804.
              </h3>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '1rem',
                }}>
                <a
                  href={dataWebImages.poledniMenu}
                  target="_self"
                  rel="noopener noreferrer">
                  <img
                    id="image"
                    style={{ width: '100%' }}
                    src={dataWebImages.poledniMenu}
                    alt="Polední menu"
                    title="Polední menu"
                  />
                </a>
              </div>
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
