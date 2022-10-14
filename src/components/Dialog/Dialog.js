import React, { useEffect, useState } from "react";
//elements
import { DialogWrap, DialogContent, DialogAktualne } from "./Dialog.elements";
import { LinkBtn } from "../../globalStyles";

function Dialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 600);
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
          <DialogContent>
            <button onClick={handleClose} value="X">
              X
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
              <DialogAktualne>
                <span>15.10.2022</span>
                <span>Restaurace je momentálně UZAVŘENA. Rozvoz funguje.</span>
              </DialogAktualne>
          </DialogContent>
        </DialogWrap>
      )}
    </>
  );
}

export default Dialog;
