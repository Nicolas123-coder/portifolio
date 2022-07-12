import React from "react"
import me from "../me.jpeg"

const AboutMe = () => {
  return (
    <div id='about' className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
            <img className="profile-img" src={me} alt="me"/>
            </div>
        </div>
        <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">about me</h1>
            <p>
            Lorem ipsum dolor sit amet. Et maiores dolores qui nobis animi et aliquid nemo in nesciunt ducimus aut alias dolorum. Et nihil quam qui reprehenderit voluptatem est unde voluptate id ducimus laborum quo dolores cumque aut cumque sunt.
            Vel internos aperiam ab eligendi voluptatem id enim voluptatem aut animi nisi et ratione doloremque? Qui fuga blanditiis aut voluptatem assumenda ut voluptas omnis in placeat illum vel dolores necessitatibus.
            Vel alias officia sit consequatur repudiandae qui totam rerum sed explicabo corporis. Et accusamus eius sed nisi accusamus et quod obcaecati et voluptatum illum vel numquam nisi! Ut voluptatem voluptatem et corporis vitae eum facere consectetur et atque repellendus 33 perspiciatis aperiam vel animi iure. Id Quis blanditiis nam recusandae voluptate quo quidem dolorem nam omnis quia.
            </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
