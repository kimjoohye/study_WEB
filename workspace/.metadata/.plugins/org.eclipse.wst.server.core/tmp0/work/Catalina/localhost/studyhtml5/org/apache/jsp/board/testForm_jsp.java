/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/9.0.62
 * Generated at: 2022-05-16 07:27:07 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.board;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.apache.log4j.Logger;

public final class testForm_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(1);
    _jspx_dependants.put("/com/common.jsp", Long.valueOf(1652679496347L));
  }

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = new java.util.HashSet<>();
    _jspx_imports_classes.add("org.apache.log4j.Logger");
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    if (!javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      final java.lang.String _jspx_method = request.getMethod();
      if ("OPTIONS".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        return;
      }
      if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSP들은 오직 GET, POST 또는 HEAD 메소드만을 허용합니다. Jasper는 OPTIONS 메소드 또한 허용합니다.");
        return;
      }
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write('\r');
      out.write('\n');
      out.write("\r\n");
      out.write("\r\n");
      out.write("    \r\n");
      out.write("    \r\n");
      out.write("\r\n");

   // Context Path
   String contPath = request.getContextPath(); 
   Logger LOG = Logger.getLogger(this.getClass());
   
   // Http 1.1에서 지원하는 헤더 : 웹브라우저가 응답결과를 캐시하지 않음
   response.setHeader("Cache-Control", "no-cache");

   // 웹 브라우저가 응답결과를 캐시하지 않음(앞/뒤로 가기 no-cache)
   response.setHeader("Cache-Control", "no-store");
   
   // Http 1.0에서 지원하는 헤더 : 웹브라우저가 응답결과를 캐시하지 않음
   response.setHeader("Pragma","no-cache");
   
   // Http 1.0에서 현재시간 이전으로 캐시하지 않음
   response.setHeader("Expires","1L");
   //out.println("웹브라우저가 응답결과를 캐시하지 않음");

      out.write("                                    \r\n");
      out.write('\r');
      out.write('\n');

   LOG.debug("contPath : "+contPath); // contPath : 프로젝트 Path 

      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\r\n");
      out.write("<meta charset=\"UTF-8\">\r\n");
      out.write("<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"");
      out.print(contPath );
      out.write("/favicon.ico\">\r\n");
      out.write("<!--reset 스타일 시트 -->\r\n");
      out.write("<!-- link rel=\"stylesheet\" type=\"text/css\" href=\"");
      out.print(contPath );
      out.write("/asset/css/reset.css\" -->\r\n");
      out.write("<link rel=\"stylesheet\"  type=\"text/css\" href=\"");
      out.print(contPath );
      out.write("/asset/css/jquery-ui.css\">\r\n");
      out.write("<!--스타일 시트 -->\r\n");
      out.write("<style type=\"text/css\">\r\n");
      out.write("</style>\r\n");
      out.write("<title>Insert title here</title>\r\n");
      out.write("<!-- jquery -->\r\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(contPath );
      out.write("/asset/js/jquery-1.12.4.js\"></script>\r\n");
      out.write("<!-- jQuery UI -->\r\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(contPath );
      out.write("/asset/js/jquery-ui.js\"></script>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("	<h2>View->Controller call</h2>\r\n");
      out.write("	<hr/>\r\n");
      out.write("	<div>\r\n");
      out.write("   <input type=\"button\" value=\"전송\" onclick=\"doSave();\">\r\n");
      out.write("	</div>\r\n");
      out.write("  <form action=\"");
      out.print(contPath );
      out.write("/board/board.do\" name=\"boardFrm\" id=\"boardFrm\">\r\n");
      out.write("      작업구분 : <input type=\"hidden\" name=\"work_div\" id=\"work_div\" value=\"doSave\"><br/>\r\n");
      out.write("   SEQ : <input type=\"text\" name=\"seq\" id=\"seq\"><br/>\r\n");
      out.write("      제목 : <input type=\"text\" name=\"title\" id=\"title\" maxlength=\"200\"><br/>\r\n");
      out.write("      등록자 : <input type=\"text\" name=\"reg_id\" id=\"reg_id\" maxlength=\"20\"><br/>\r\n");
      out.write("      내용 : <textarea rows=\"5\" cols=\"50\" name=\"contents\" id=\"contents\"></textarea><br/>\r\n");
      out.write("  </form>\r\n");
      out.write("	<script type=\"text/javascript\">\r\n");
      out.write("	  $(document).ready(function(){\r\n");
      out.write("		  console.log(`document ready`);\r\n");
      out.write("	  });\r\n");
      out.write("	  \r\n");
      out.write("	  function doSave(){\r\n");
      out.write("		  console.log(`doSave()`);\r\n");
      out.write("		  \r\n");
      out.write("		  // document.boardFrm\r\n");
      out.write("		  let frm = document.getElementById(\"boardFrm\");\r\n");
      out.write("		  \r\n");
      out.write("		  let seq = $('#seq').val();\r\n");
      out.write("		  \r\n");
      out.write("		  if(null === seq || seq.trim().length == 0){\r\n");
      out.write("		        $('#seq').focus();\r\n");
      out.write("		        alert('순번을 입력하세요.');\r\n");
      out.write("		        return false;\r\n");
      out.write("		   }\r\n");
      out.write("		  \r\n");
      out.write("		  // 제목\r\n");
      out.write("		  // jquery\r\n");
      out.write("		  let title = $('#title').val();\r\n");
      out.write("		  \r\n");
      out.write("		  // javascript\r\n");
      out.write("		  // let title = frm.title.value;\r\n");
      out.write("		  console.log('title : ' + title);\r\n");
      out.write("		  \r\n");
      out.write("		  if(null === title || title.trim().length == 0) {\r\n");
      out.write("			  $('#title').focus();\r\n");
      out.write("			  alert('제목을 입력하세요.');\r\n");
      out.write("			  return false;\r\n");
      out.write("		  }\r\n");
      out.write("		  \r\n");
      out.write("		  let regId = $('#reg_id').val();\r\n");
      out.write("		  \r\n");
      out.write("		  if(null === regId || regId.trim().length == 0){\r\n");
      out.write("			  $('#reg_id').focus();\r\n");
      out.write("			  alert('등록자 ID를 입력하세요.');\r\n");
      out.write("			  return;\r\n");
      out.write("		  }\r\n");
      out.write("		  \r\n");
      out.write("		  // 내용\r\n");
      out.write("		  let contents = $('#contents').val();\r\n");
      out.write("		  \r\n");
      out.write("		  if(null === contents || contents.trim().length == 0){\r\n");
      out.write("			  $('#contents').focus();\r\n");
      out.write("			  alert('내용을 입력하세요.');\r\n");
      out.write("			  return;\r\n");
      out.write("		  }\r\n");
      out.write("		  \r\n");
      out.write("		  if(false == confirm('저장하시겠습니까?')) return;\r\n");
      out.write("		  \r\n");
      out.write("		  // JAVASCRIPT FORM submit\r\n");
      out.write("		  // frm.submit();\r\n");
      out.write("		  \r\n");
      out.write("		   // ajax\r\n");
      out.write("	     $.ajax({\r\n");
      out.write("	         type: \"POST\",\r\n");
      out.write("	         url:\"/studyhtml5/board/board.do\",\r\n");
      out.write("	         asyn:\"true\",\r\n");
      out.write("	         dataType:\"html\",\r\n");
      out.write("	         data:{\r\n");
      out.write("	        	 // 변수 : 값\r\n");
      out.write("	           work_div : $('#work_div').val(),\r\n");
      out.write("	           seq : seq,\r\n");
      out.write("	           title : title,\r\n");
      out.write("	           reg_id : regId,\r\n");
      out.write("	           contents : contents\r\n");
      out.write("	         },\r\n");
      out.write("	         success:function(data){//통신 성공\r\n");
      out.write("	             console.log(\"success data:\"+data);\r\n");
      out.write("	           },\r\n");
      out.write("	           error:function(data){//실패시 처리\r\n");
      out.write("	             console.log(\"error:\"+data);\r\n");
      out.write("	           }\r\n");
      out.write("	       });\r\n");
      out.write("	  }\r\n");
      out.write("	</script>\r\n");
      out.write("</body>\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}