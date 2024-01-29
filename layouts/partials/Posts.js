import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }) => {
  const { blog_folder, summary_length } = config.settings;
  return (
    <div className="section row pb-0">
      {posts.map((item, i) => {
        return (
          <div className="col-12 pb-12 lg:pb-24">
            <div className="row items-center">
              <div className="col-12 flex justify-center md:col-6">
                {posts[i].frontmatter.image && (
                  <Image
                    className="h-auto w-full rounded-lg"
                    src={posts[i].frontmatter.image}
                    alt={posts[i].frontmatter.title}
                    width={540}
                    height={227}
                    priority={true}
                    style={{ width: "30%", height: "30%" }} // optional
                  />
                )}
              </div>
              <div className="col-12 md:col-6">
                <h2 className="h3 mb-2 ">
                  <Link
                    href={`/${blog_folder}/${posts[i].slug}`}
                    className="block hover:text-primary"
                  >
                    {posts[i].frontmatter.title}
                  </Link>
                </h2>
                <p className="text-text">
                  {plainify(
                    posts[i].content?.slice(i, Number(summary_length)),
                    "div"
                  )}
                </p>
                {/* <Link
                  className="btn btn-primary mt-4"
                  href={`/${blog_folder}/${posts[i].slug}`}
                  rel=""
                >
                  Read More
                </Link> */}
              </div>
            </div>
          </div>
        );
      })}
      {/* {posts.slice(1).map((post, i) => (
        <div key={`key-${i}`} className="col-12 mb-8 sm:col-6 lg:col-4">
          {post.frontmatter.image && (
            <Image
              className="rounded-lg"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={i === 0 ? "925" : "445"}
              height={i === 0 ? "475" : "230"}
            />
          )}
          <h2 className="h3 mb-2 mt-4">
            <Link
              href={`/${blog_folder}/${post.slug}`}
              className="block hover:text-primary"
            >
              {post.frontmatter.title}
            </Link>
          </h2>
          <p className="text-text">{post.frontmatter.desc}</p>
          <Link
            className="btn btn-primary mt-4"
            href={`/${blog_folder}/${post.slug}`}
            rel=""
          >
            Read More
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export default Posts;
