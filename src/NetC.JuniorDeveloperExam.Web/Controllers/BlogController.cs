using NetC.JuniorDeveloperExam.Web.Models;
using NetC.JuniorDeveloperExam.Web.Services;
using System.Web.Mvc;
using System.Linq;
using System.Collections.Generic;
using NetC.JuniorDeveloperExam.Web.ViewModels;
using System;

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

                    return RedirectToAction("Index", "Blog", new { id = comment.BlogId } );
                }
                catch (Exception ex)
                {
                    comment.ErrorMessage = ex.Message;

                    return RedirectToAction("Index", "Blog", new { id = comment.BlogId });
                }
            };

            comment.ErrorMessage = "There was an error submitting your comment. Please try again";

            return RedirectToAction("Index", "Blog", new { id = comment.BlogId });
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

                    return RedirectToAction("Index", "Blog", new { id = reply.BlogId });
                }
                catch (Exception ex)
                {
                   reply.ErrorMessage = ex.Message;

                    return RedirectToAction("Index", "Blog", new { id = reply.BlogId });
                }
            };

            reply.ErrorMessage = "There was an error submitting your comment. Please try again";

            return RedirectToAction("Index", "Blog", new { id = reply.BlogId });
        }
    }
}