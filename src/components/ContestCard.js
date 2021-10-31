import React from "react";

const ContestCard = (props) => {
  // console.log(props.users)
  return (
    <div>
      <div className="topp">
        <h2 className="headum">{props.names}</h2>
      </div>
      <div className="container-fluid">
        <div className="row text-center">
          {props.users.map((curElem) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 my-5">
                <div className="card c_ard">
                  <div>
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0",
                        width: "8%",
                      }}
                    >
                      {curElem.Platform === "HACKEREARTH" && (
                        <img
                          width="10%"
                          height="10%"
                          src={
                            "https://amit839.github.io/resources/css/images/achievements/hackerearth-logo.png"
                          }
                          className="card-img-top"
                          alt="..."
                        />
                      )}
                      {curElem.Platform === "CODECHEF" && (
                        <img
                          width="30"
                          height="25"
                          src={
                            "https://www.codechef.com/misc/fb-image-icon.png"
                          }
                          className="card-img-top"
                          alt="..."
                        />
                      )}
                      {curElem.Platform === "CODEFORCES" && (
                        <img
                          width="30"
                          height="25"
                          src={
                            "https://carlacastanho.github.io/Material-de-APC/assets/images/codeforces_icon.png"
                          }
                          className="card-img-top"
                          alt="..."
                        />
                      )}
                      {curElem.Platform === "ATCODER" && (
                        <img
                          width="30"
                          height="25"
                          src={
                            "https://pbs.twimg.com/profile_images/378800000000403108/c8cfcb35c76ca5fc55fc2dc680685e8c_400x400.png"
                          }
                          className="card-img-top"
                          alt="..."
                        />
                      )}
                      {curElem.Platform !== "HACKEREARTH" &&
                        curElem.Platform !== "CODECHEF" &&
                        curElem.Platform !== "CODEFORCES" &&
                        curElem.Platform !== "ATCODER" && (
                          <img
                            width="30"
                            height="25"
                            src={
                              "https://th.bing.com/th/id/OIP.3JpFam4YU6Ki1Yn7QYsa7AHaHa?pid=ImgDet&rs=1"
                            }
                            className="card-img-top"
                            alt="..."
                          />
                        )}
                    </span>
                  </div>

                  <div className="card-body">
                    <div className="card-title tt">{curElem.Name}</div>
                    {curElem.StartTime && (
                      <div className="card-text" style={{ color: "#F0D9FF" }}>
                        <small>
                          Start Time:{" "}
                          {!curElem.StartTime ? "Unknown" : curElem.StartTime}
                        </small>
                      </div>
                    )}
                    <div className="card-text" style={{ color: "#F0D9FF" }}>
                      <small>
                        End Time:{" "}
                        {!curElem.EndTime ? "Unknown" : curElem.EndTime}
                      </small>
                    </div>
                    {curElem.Duration && (
                      <div className="card-text" style={{ color: "#F0D9FF" }}>
                        <small>
                          Duration:{" "}
                          {!curElem.Duration ? "Unknown" : curElem.Duration}
                        </small>
                      </div>
                    )}
                    <br />
                    <a
                      href={curElem.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-dark"
                    >
                      Compete
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
