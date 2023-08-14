export default function ModalLogin() {
  return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="pt-1 pb-1">
                  <label htmlFor="email" className="pb-2">
                    E-mail:
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="pt-1 pb-1">
                  <label htmlFor="password" className="pb-2">
                    Senha:
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    name="password"
                    id="senha"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <input
                type="submit"
                className="btn btn-primary border-0 btnLogar"
                value="Entrar"
                id="btnLogar"
              ></input>
            </div>
          </div>
        </div>
      </div>
  );
}
