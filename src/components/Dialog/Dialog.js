import React, { useEffect, useState } from "react";
//elements
import { DialogWrap, DialogContent, DialogAktualne } from "./Dialog.elements";
import { LinkBtn } from "../../globalStyles";
//aktualneText
import { aktualneText } from "../../dataText";
// icons
import {IoClose}  from "react-icons/io5";

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
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
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
              <h3>ROZVOZ PIZZY</h3>
              <p>
                Pizzu si můžete objednat telefonicky a využít náš rozvoz v
                Raškovicích a blízkém okolí.
              </p>
              <LinkBtn to="/rozvoz" className="dialogBtn">
                Přejít k objednání
              </LinkBtn>

              <h3>Aktuálně:</h3>
              {aktualneText &&
                aktualneText.map((item, index) => {
                  return (
                    <DialogAktualne key={index}>
                      <span>{item.date}</span>
                      <span>{item.info}</span>
                    </DialogAktualne>
                  );
                })}
            </DialogContent>
          </div>
        </DialogWrap>
      )}
    </>
  );
}

export default Dialog;
