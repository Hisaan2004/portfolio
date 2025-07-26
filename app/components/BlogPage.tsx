"use client";
import React /*{ useState }*/ from "react";
import Text from "@/app/widget/Text";
import Links from "@/app/widget/Link";

const BlogPage = () => {
  //  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black border-t-2">
      <div
        className="bg-cover bg-center rounded-lg w-[90%] md:w-2/3 h-[85vh] flex items-center justify-center p-6 shadow-lg relative"
        style={{ backgroundImage: "url('images/backgroundBlogimg.jpg')" }}
      >
        <div className=" py-10 flex flex-col items-center justify-center gap-4 bg-white/80 dark:bg-black/90 p-8 rounded-lg">
          <Text variant="heading1" className="text-center ">
            Blog
          </Text>
          <Links href="/blog" variant="connecting_link" className="pt-1.5 flex justify-center items-center">
            <Text
              variant="paragraph"
              className="text-white text-center"
            >
              View Blogs
            </Text>
          </Links>
          {/*onClick={() => /*router.push('/blogList')setOpen(true)}</Link>*/}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
