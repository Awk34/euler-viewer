webpackJsonp([1],{2116:function(t,e,n){function a(t){return n(r(t))}function r(t){var e=l[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var l={"./euler1.java":1150,"./euler10.java":1151,"./euler100.java":1152,"./euler101.java":1153,"./euler102.java":1154,"./euler103.java":1155,"./euler104.java":1156,"./euler105.java":1157,"./euler108.java":1158,"./euler11.java":1159,"./euler110.java":1160,"./euler112.java":1161,"./euler119.java":1162,"./euler12.java":1163,"./euler120.java":1164,"./euler125.java":1165,"./euler13.java":1166,"./euler131.java":1167,"./euler14.java":1168,"./euler144.java":1169,"./euler144_GUI.java":2144,"./euler144_GUI_circle.java":2145,"./euler145.java":1170,"./euler15.java":1171,"./euler16.java":1172,"./euler17.java":1173,"./euler18.java":1174,"./euler19.java":1175,"./euler2.java":1176,"./euler20.java":1177,"./euler205.java":1178,"./euler206.java":1179,"./euler21.java":1180,"./euler22.java":1181,"./euler23.java":1182,"./euler233.java":1183,"./euler23_2.java":2146,"./euler243.java":1184,"./euler25.java":1185,"./euler26.java":1186,"./euler265.java":1187,"./euler27.java":1188,"./euler277.java":1189,"./euler28.java":1190,"./euler29.java":1191,"./euler3.java":1192,"./euler30.java":1193,"./euler301.java":1194,"./euler31.java":1195,"./euler310.java":1196,"./euler32.java":1197,"./euler33.java":1198,"./euler34.java":1199,"./euler35.java":1200,"./euler356.java":1201,"./euler357.java":1202,"./euler358.java":1203,"./euler36.java":1204,"./euler362.java":1205,"./euler365.java":1206,"./euler368.java":1207,"./euler37.java":1208,"./euler381.java":1209,"./euler39.java":1210,"./euler4.java":1211,"./euler40.java":1212,"./euler41.java":1213,"./euler42.java":1214,"./euler43.java":1215,"./euler44.java":1216,"./euler45.java":1217,"./euler46.java":1218,"./euler47.java":1219,"./euler48_2.java":2147,"./euler49.java":1220,"./euler5.java":1221,"./euler50.java":1222,"./euler51.java":1223,"./euler52.java":1224,"./euler53.java":1225,"./euler54.java":1226,"./euler55.java":1227,"./euler56.java":1228,"./euler57.java":1229,"./euler58.java":1230,"./euler59.java":1231,"./euler6.java":1232,"./euler60.java":1233,"./euler61.java":1234,"./euler62.java":1235,"./euler63.java":1236,"./euler64.java":1237,"./euler65.java":1238,"./euler66.java":1239,"./euler67.java":1240,"./euler69.java":1241,"./euler7.java":1242,"./euler70.java":1243,"./euler71.java":1244,"./euler72.java":1245,"./euler73.java":1246,"./euler74.java":1247,"./euler75.java":1248,"./euler76.java":1249,"./euler77.java":1250,"./euler78.java":1251,"./euler79.java":1252,"./euler8.java":1253,"./euler80.java":1254,"./euler81.java":1255,"./euler82.java":1256,"./euler83.java":1257,"./euler84.java":1258,"./euler85.java":1259,"./euler86.java":1260,"./euler87.java":1261,"./euler89.java":1262,"./euler9.java":1263,"./euler90.java":1264,"./euler91.java":1265,"./euler92.java":1266,"./euler93.java":1267,"./euler94.java":1268,"./euler95.java":1269,"./euler96.java":1270,"./euler97.java":1271,"./euler98.java":1272,"./euler99.java":1273};a.keys=function(){return Object.keys(l)},a.resolve=r,t.exports=a,a.id=2116},2144:function(t,e){t.exports='/*\n * Andrew Koroluk\n */\n\nimport java.awt.Dimension;\nimport java.awt.Graphics;\nimport java.awt.Graphics2D;\n//import java.awt.RenderingHints;\nimport java.awt.event.WindowAdapter;\nimport java.awt.event.WindowEvent;\nimport java.awt.geom.Ellipse2D;\nimport java.awt.geom.Line2D;\nimport javax.swing.JApplet;\nimport javax.swing.JFrame;\n\npublic class euler144_GUI extends JApplet implements Runnable {\n\tprivate static final long serialVersionUID = 8448434994100300609L;\n\tstatic int w = 300;\n\tstatic int h = 2*w;\n\tstatic int var = (h-20)/20;\n\n    public static void main(String[] args) {    \t\n        JFrame f = new JFrame("Project Euler #144 - by Andrew Koroluk");\n        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n        f.addWindowListener(new WindowAdapter() {\n            public void windowClosing(WindowEvent e) {System.exit(0);}\n        });\n        JApplet applet = new euler144_GUI();\n        f.getContentPane().add("Center", applet);\n        applet.init();\n        f.pack();\n        f.setSize(new Dimension(w+25,h+50));\n        f.setResizable(false);\n        f.setVisible(true);\n        try {\n\t\t\tThread.sleep(100);\n\t\t} catch (InterruptedException e) {\n\t\t\te.printStackTrace();\n\t\t}\n        \n    }\n\tpublic void paint(Graphics g) {\n\t\twhile(true) {\n\t\t\tGraphics2D g2 = (Graphics2D) g;\n\t\t\t//g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);\n\t\t\tg2.draw(new Ellipse2D.Double(5, 8, w-10, h-20));\n\t\n\t\t\tdouble x1 = 0;\n\t\t\tdouble y1 = 10.1;\n\t\t\tdouble x2 = 1.4;\n\t\t\tdouble y2 = -9.6;\n\t\t\t//int ans=1;\n\t\t\tg2.draw(new Line2D.Double(w/2-x1*var, h/2-y1*var, w/2-x2*var, h/2-y2*var));\n\t\n\t\t\twhile(true) {\n\t\t\t\tdouble m0 = (y2-y1)/(x2-x1);\n\t\t\t\tdouble m1 = deriv(x2,y2);\n\t\t\t\tdouble tempX=x2, tempY=y2;\n\t\t\t\tdouble X = (m0-m1)/(1+m0*m1);\n\t\t\t\tdouble m2 = (m1-X)/(1+X*m1);\n\t\n\t\t\t\tdouble b = (y2-m2*x2);\n\t\t\t\tx2 = quadratic(m2, b, x2);\n\t\t\t\ty2 = m2*x2 + b;\n\t\t\t\tx1=tempX;\n\t\t\t\ty1=tempY;\n\t\n\t\t\t\tg2.draw(new Line2D.Double(w/2-x1*var, h/2-y1*var, w/2-x2*var, h/2-y2*var));\n\t\t\t\ttry {\n\t\t\t\t\tThread.sleep(20);\n\t\t\t\t} catch (InterruptedException e) {\n\t\t\t\t\te.printStackTrace();\n\t\t\t\t}\n\t\n\t\t\t\tif(y2>0 && x2>-.01 && x2<.01) break;\n\t\t\t\t//ans++;\n\t\t\t}\n\t\t\ttry {\n\t\t\t\tThread.sleep(100);\n\t\t\t} catch (InterruptedException e) {\n\t\t\t\te.printStackTrace();\n\t\t\t}\n\t\t\tbreak;\n\t\t\t//System.out.println(ans);\n\t\t}\n\t}\n\tstatic double deriv(double x, double y) {\n\t\treturn -4*x/y;\n\t}\n\tstatic double quadratic(double m2, double n, double x2) {\n\t\tdouble a = 4 + m2*m2;\n\t\tdouble b = 2*m2*n;\n\t\tdouble c = n*n - 100;\n\n\t\tdouble ans1 =  (-b + Math.sqrt(b*b - 4*a*c))/(2*a);\n\t\tdouble ans2 =  (-b - Math.sqrt(b*b - 4*a*c))/(2*a);\n\t    double dx1 = x2 - ans1;\n        double dx2 = x2 - ans2;\n        dx1 = dx1>0 ? dx1 : -dx1;\n        dx2 = dx2>0 ? dx2 : -dx2;\n\n        if(dx1>dx2) return ans1;\n        else return ans2;\n\t}\n\t@Override\n\tpublic void run() {\n\t\t\n\t}\n}'},2145:function(t,e){t.exports='/*\n * Andrew Koroluk\n */\n\nimport java.awt.Dimension;\nimport java.awt.Graphics;\nimport java.awt.Graphics2D;\n//import java.awt.RenderingHints;\nimport java.awt.event.WindowAdapter;\nimport java.awt.event.WindowEvent;\nimport java.awt.geom.Ellipse2D;\nimport java.awt.geom.Line2D;\nimport javax.swing.JApplet;\nimport javax.swing.JFrame;\n\npublic class euler144_GUI_circle extends JApplet implements Runnable {\n\tprivate static final long serialVersionUID = 8448434994100300609L;\n\tstatic int w = 300;\n\tstatic int h = 2*w;\n\tstatic int var = (h-20)/20;\n\n    public static void main(String[] args) {    \t\n        JFrame f = new JFrame("Project Euler #144 - by Andrew Koroluk");\n        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n        f.addWindowListener(new WindowAdapter() {\n            public void windowClosing(WindowEvent e) {System.exit(0);}\n        });\n        JApplet applet = new euler144_GUI_circle();\n        f.getContentPane().add("Center", applet);\n        applet.init();\n        f.pack();\n        f.setSize(new Dimension(w+25,h+50));\n        f.setResizable(false);\n        f.setVisible(true);\n        try {\n\t\t\tThread.sleep(100);\n\t\t} catch (InterruptedException e) {\n\t\t\te.printStackTrace();\n\t\t}\n        \n    }\n\tpublic void paint(Graphics g) {\n\t\twhile(true) {\n\t\t\tGraphics2D g2 = (Graphics2D) g;\n\t\t\t//g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);\n\t\t\tg2.draw(new Ellipse2D.Double(5, 8, w-10, h-20));\n\t\n\t\t\tdouble x1 = 0;\n\t\t\tdouble y1 = 10.1;\n\t\t\tdouble x2 = 1.4;\n\t\t\tdouble y2 = -9.6;\n\t\t\t//int ans=1;\n\t\t\tg2.draw(new Line2D.Double(w/2-x1*var, h/2-y1*var, w/2-x2*var, h/2-y2*var));\n\t\n\t\t\twhile(true) {\n\t\t\t\tdouble m0 = (y2-y1)/(x2-x1);\n\t\t\t\tdouble m1 = deriv(x2,y2);\n\t\t\t\tdouble tempX=x2, tempY=y2;\n\t\t\t\tdouble X = (m0-m1)/(1+m0*m1);\n\t\t\t\tdouble m2 = (m1-X)/(1+X*m1);\n\t\n\t\t\t\tdouble b = (y2-m2*x2);\n\t\t\t\tx2 = quadratic(m2, b, x2);\n\t\t\t\ty2 = m2*x2 + b;\n\t\t\t\tx1=tempX;\n\t\t\t\ty1=tempY;\n\t\n\t\t\t\tg2.draw(new Line2D.Double(w/2-x1*var, h/2-y1*var, w/2-x2*var, h/2-y2*var));\n\t\t\t\ttry {\n\t\t\t\t\tThread.sleep(20);\n\t\t\t\t} catch (InterruptedException e) {\n\t\t\t\t\te.printStackTrace();\n\t\t\t\t}\n\t\n\t\t\t\tif(y2>0 && x2>-.01 && x2<.01) break;\n\t\t\t\t//ans++;\n\t\t\t}\n\t\t\ttry {\n\t\t\t\tThread.sleep(100);\n\t\t\t} catch (InterruptedException e) {\n\t\t\t\te.printStackTrace();\n\t\t\t}\n\t\t\tbreak;\n\t\t\t//System.out.println(ans);\n\t\t}\n\t}\n\tstatic double deriv(double x, double y) {\n\t\treturn -x/y;\n\t}\n\tstatic double quadratic(double m2, double n, double x2) {\n\t\tdouble a = 4 + m2*m2;\n\t\tdouble b = 2*m2*n;\n\t\tdouble c = n*n - 100;\n\n\t\tdouble ans1 =  (-b + Math.sqrt(b*b - 4*a*c))/(2*a);\n\t\tdouble ans2 =  (-b - Math.sqrt(b*b - 4*a*c))/(2*a);\n\t    double dx1 = x2 - ans1;\n        double dx2 = x2 - ans2;\n        dx1 = dx1>0 ? dx1 : -dx1;\n        dx2 = dx2>0 ? dx2 : -dx2;\n\n        if(dx1>dx2) return ans1;\n        else return ans2;\n\t}\n\t@Override\n\tpublic void run() {\n\t\t\n\t}\n}'},2146:function(t,e){t.exports='import java.util.ArrayList;\nimport java.util.Iterator;\n\n/*\n * Andrew Koroluk\n */\n\npublic class euler23_2 {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(d(12));\n\t\tint s = 0;\n\t\tArrayList<Integer> a = new ArrayList<Integer>();\n\t\tfor(int n=1; n<=20162; n++) {\n\t\t  if(d(n) > n)\n\t\t    a.add(n);\n\t\t  else {\n\t\t\t  Iterator<Integer> itr = a.iterator();\n\t\t\t  while (itr.hasNext()) {\n\t\t\t\t  if(a.contains(n-itr.next()))\n\t\t\t\t\t  s += n;\n\t\t\t  }\n\t\t  }\n\t\t}\n\t\t \n\t\tSystem.out.println("Answer to PE #23 = "+s);\n\t}\n\tstatic int d(int n) {\n\t\t  int s = 1;\n\t\t  int t = (int) Math.sqrt(n);\n\t\t  for(int i=2; i<=t+1; i++)\n\t\t    if(n%i == 0) s += (i + n)/i;\n\t\t  if(t == (int)t) s -= t;\n\t\t  return s;\n\t}\n}'},2147:function(t,e){t.exports='/*\n * Andrew Koroluk\n */\n\nimport java.util.Scanner;\nimport java.math.BigInteger;\n\npublic class euler48_2 {\n\tpublic static void main(String[] args) {\n\t    Scanner reader = new Scanner(System.in);\n\t    BigInteger a = new BigInteger("1");\n\t    long n=0;\n\t    //System.out.println(Math.pow(1000, 1000));\n\n\t    ///*\n\t    for(double i=2; i<=1000; i++) {\n\t\t\t@SuppressWarnings("unused")\n\t\t\tBigInteger x = new BigInteger(Double.toString(i));\n\t\t\tn = (int)Math.pow(i, i);\n\n\t\t\ta = a.add(new BigInteger(Long.toString(n) ) );\n\t\t\tSystem.out.println(i+"\\n"+n+"\\n"+a);\n\t\t\treader.nextLine();\n\n\t\t}\n\t\tint length = a.toString().length();\n\t\tfor(int i=10;i>=1;i--) {\n\t\tSystem.out.print((a.toString()).charAt(length-i));\n\t\t}\n\t\tSystem.out.println("\\n"+a);\n\t\t//*/\n\t}\n}\n\n/*\nThe series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.\n\nFind the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.\n*/'}});