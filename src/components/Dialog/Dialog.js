import React, { useEffect, useState } from "react";

import { DialogWrap, DialogContent, DialogAktualne } from "./Dialog.elements";

import { LinkBtn } from "../../pages/Uvod/Uvod.elements";

function Dialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

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
            <h3>Aktuálně:</h3>
            <DialogAktualne><span>15.10.2022</span><span>Restaurace je prozatím pro veřejnost UZAVŘENA, je
              možné si pouze vyzvednout objednanou pizzu.</span></DialogAktualne>
            <h3>PIZZA TO GO</h3>
            <p>
              Pizzu si můžete objednat telefonicky a vyzvednout osobně, nebo
              využíjt náš rozvoz v Raškovicích a blízkém okolí.
            </p>
            <LinkBtn to="/rozvoz" className="dialogBtn">
              Přejít k objednání
            </LinkBtn>
          </DialogContent>
        </DialogWrap>
      )}
    </>
  );
}

export default Dialog;
