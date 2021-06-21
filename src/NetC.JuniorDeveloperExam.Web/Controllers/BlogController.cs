using NetC.JuniorDeveloperExam.Web.Models;
using NetC.JuniorDeveloperExam.Web.Services;
using System.Web.Mvc;
using System.Linq;
using System.Collections.Generic;
using NetC.JuniorDeveloperExam.Web.ViewModels;
using System;
using Newtonsoft.Json;

namespace NetC.JuniorDeveloperExam.Web.Controllers
{
    public class BlogController : Controller
    {

        public ActionResult Index(int id = 1)
        {
            var blogService = new BlogService();

            var blogs = blogService.GetAllBlogs();


            var selectedBlog = blogs.FirstOrDefault(x => x.Id == id);

            return View(selectedBlog);
        }

        [HttpPost]
        public ActionResult AddComment(CommentFormViewModel comment)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var blogService = new BlogService();
                    blogService.AddNewComment(comment);

                    var comments = blogService.GetCommentsByBlogId(comment.BlogId);

                    return Json(new { Comments = comments, Response = "Success", ResponseCode = 200 });
                }
                catch (Exception ex)
                {
                    comment.ErrorMessage = ex.Message;

                    return Json(new { Response = "Failed", ResponseCode = 555, Error = ex.Message });
                }
            };


            return Json(new { Response = "Failed", ResponseCode = 550, Error = "Invalid Submission" });
        }

        [HttpPost]
        public ActionResult AddReply(CommentReplyFormViewModel reply)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var blogService = new BlogService();
                    blogService.AddNewReply(reply);
                    var comments = blogService.GetCommentsByBlogId(reply.BlogId);

                    return Json(new { Comments = comments, Response = "Success", ResponseCode = 200 });
                }
                catch (Exception ex)
                {

                    return Json(new { Response = "Failed", ResponseCode = 555, Error = ex.Message });
                }
            };


            return Json(new { Response = "Failed", ResponseCode = 550, Error = "Invalid Submission" });
        }

        [HttpGet]
        public ActionResult GetCommentsByBlogId(int id)
        {
            var blogService = new BlogService();

            var blogs = blogService.GetAllBlogs();

            var selectedBlog = blogs.FirstOrDefault(x => x.Id == id);

            return Json(selectedBlog.Comments, JsonRequestBehavior.AllowGet);
        }
    }
}