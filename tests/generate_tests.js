var tests = [
        "\n",
        "\n\n",
        "\t\n",
        "  \n",
        "a\nb\nc\n\n\n",
        "a\nb\nc\n \n\t\n     ",
        "3 > 4\na",
        " 3 < 4\na",
        " 3 <4\na",
        "Hey Ho!\na",
        "Hey\nHo!\nHardy\n\n",
        "Hey Ho  \nLets Go",
        "    \nHey\nHo!  \nLets Go",
        // General Characters - First Char is an edge case
        // and make sure that the rest of the line parses to a list...
        // "<ab:c\na",  - showdown doesn't escape < by default
        // "</ab:c\na", - showdown doesn't escape < by default
        "/ab:c\na",
        "=ab:c\na",
        "-ab:c\na",
        "#ab:c\na",
        ">ab:c\na",
        "+ab:c\na",
        "*ab:c\na",
        "_ab:c\na",
        "1ab:c\na",
        "2ab:c\na",
        "3ab:c\na",
        "4ab:c\na",
        "5ab:c\na",
        "6ab:c\na",
        "7ab:c\na",
        "8ab:c\na",
        "9ab:c\na",
        "0ab:c\na",
        ".ab:c\na",
        ":ab:c\na",
        "\'ab:c\na",
        "\"ab:c\na",
        "`ab:c\na",
        "!ab:c\na",
        "\\ab:c\na",
        "/ab:c\na",
        "(ab:c\na",
        ")ab:c\na",
        "[ab:c\na",
        "]ab:c\na",
        "(ab:c\na",
        " ab:c\na",
        "\tab:c\na",
        "\nab:c\na",
        "\r\nab:c\na",
        // General Characters - First Char followed by a space
        // and make sure that the rest of the line parses to a list...
        "< ab:c\na",
        "< /ab:c\na",
        "/ ab:c\na",
        "= ab:c\na",
        "- ab:c\na",
        "# ab:c\na",
        "> ab:c\na",
        "+ ab:c\na",
        "* ab:c\na",
        "_ ab:c\na",
        "1 ab:c\na",
        "2 ab:c\na",
        "3 ab:c\na",
        "4 ab:c\na",
        "5 ab:c\na",
        "6 ab:c\na",
        "7 ab:c\na",
        "8 ab:c\na",
        "9 ab:c\na",
        "0 ab:c\na",
        ". ab:c\na",
        ": ab:c\na",
        "\' ab:c\na",
        "\" ab:c\na",
        "` ab:c\na",
        "! ab:c\na",
        "\\ ab:c\na",
        "/ ab:c\na",
        "( ab:c\na",
        ") ab:c\na",
        "[ ab:c\na",
        "] ab:c\na",
        "( ab:c\na",
        "  ab:c\na",
        "\t ab:c\na",
        "\n ab:c\na",
        "\r\n ab:c\na",
        // General Characters - repeat above with the special char
        // in the middle of a line (the end is just 'another middle...')
        // "xyz<ab:c\na",  - showdown doesnt escape < by default
        // "xyz</ab:c\na", - showdown doesnt escape < by default
        "xyz/ab:c\na",
        "xyz=ab:c\na",
        "xyz-ab:c\na",
        "xyz#ab:c\na",
        "xyz>ab:c\na",
        "xyz+ab:c\na",
        "xyz*ab:c\na",
        "xyz_ab:c\na",
        "xyz1ab:c\na",
        "xyz2ab:c\na",
        "xyz3ab:c\na",
        "xyz4ab:c\na",
        "xyz5ab:c\na",
        "xyz6ab:c\na",
        "xyz7ab:c\na",
        "xyz8ab:c\na",
        "xyz9ab:c\na",
        "xyz0ab:c\na",
        "xyz.ab:c\na",
        "xyz:ab:c\na",
        "xyz\'ab:c\na",
        "xyz\"ab:c\na",
        "xyz`ab:c\na",
        "xyz!ab:c\na",
        "xyz\\ab:c\na",
        "xyz/ab:c\na",
        "xyz(ab:c\na",
        "xyz)ab:c\na",
        "xyz[ab:c\na",
        "xyz]ab:c\na",
        "xyz(ab:c\na",
        "xyz ab:c\na",
        "xyz\tab:c\na",
        "xyz\nab:c\na",
        "xyz\r\nab:c\na",
        // Escape a backtick
        "abc\\`def\na",
        // single char tests on a line for significant chars
        "=\na",
        "-\na",
        ">\na",
        "[\na",
        "\n=\na",
        "\n-\na",
        "\n>\na",
        "\n[\na",
        // atx headers are a real pain :(
        "#\na",
        "##\na",
        "###\na",
        "####\na",
        "#####\na",
        "######\na",
        "#######\na",
        "########\na",
        // Emphasis
        "you *sad* bastard\na",
        "you **sad** bastard\na",
        "you ***sad*** bastard\na",
        "you _sad_ bastard\na",
        "you __sad__ bastard\na",
        "you ___sad___ bastard\na",
        "you*sad*bastard\na",
        "you_sad_bastard\na",
        "you \\*sad\\* bastard\na",
        "you \\_sad\\_ bastard\na",
        "*you* sad bastard\na",
        "**you** sad bastard\na",
        "***you*** sad bastard\na",
        "_you_ sad bastard\na",
        "__you__ sad bastard\na",
        "___you___ sad bastard\na",
        // Breaking up in to lines
        "blah\nblah",
        "blah\r\nblah",
        // "blah\r\nblah  \n", too hard!
        "blah\r\nblah\n",
        // Setext headers
        "blahblah\n====",
        "blahblah\n-----",
        "blahblah\n====\nblah",
        "blahblah\n-----\nblah",
        // Setext overrides blockquote and codeblock
        "> a\n=",
        // "    a\n=", pain in the neck to fix
        "> a\n-",
        // "    a\n-", pain in the neck to fix
        // ATX headers
        "# blahblah",
        "## blahblah",
        "### blahblah",
        "#### blahblah",
        "##### blahblah",
        "###### blahblah",
        "####### blahblah",
        "# blahblah ###",
        "# blahblah\nbleh",
        "## blahblah\nbleh",
        "### blahblah\nbleh",
        "#### blahblah\nbleh",
        "##### blahblah\nbleh",
        "###### blahblah\nbleh",
        "####### blahblah\nbleh",
        "# blahblah ###\nbleh",
        // Basic blockquotes
        "> blah\na",
        "bleh\n> blah",
        // "bleh  \n> blah", pointlessly hard to fix
        // "bleh\n> > blah", not handling nested blockquotes...
        // Basic unordered lists
        "+ blah",
        "+blah\na",
        "* blah",
        "*blah\na",
        "- blah",
        "-blah\na",
        "- a\n+ b\n- c",
        "- a\n\n\n\nXX+ b",
        "- a\n\n\n\n XX+ b",
        "- a\n \n \n\t\n XX+ b",
        "- a\n\n \n\t\n XX+ b",
        "- a\n\n+ b",
        "- a\n\n+ b\n\n+ c\n* d",
        "- blah\nblah",
        // Ordered Lists
        "1. blah",
        "4. blah",
        "555. blah",
        "555 \@blah\na",
        "555.blah\na",
        "4. blah\nblah",
        "4. a\n5. b\n6. c",
        "4. a\n\n5. b\n\n6. c",
        // Basic Code
        "    b",
        "\tb",
        "\tb\nc",
        "\tb\n\nc",
        "\tb\n\n\nc",
        "\tb\n\n\n\nc",
        "\tb\n\n\n\n\nc",
        // Code In Lists
        "+ a\n\t    b",
        "+ a\n  \t  b",
        "+ a\n\t\tb",
        // "+ a\n    > b", a bug in showdown
        // "+ a\n\t> b\nc", a bug in showdown
        // "+ a\n\t> b\nc\n\nd", a bug in showdown
        // "+ a\n\t> b\nc\n\n\nd", a bug in showdown
        "\t<div>",
        "\t<div>&",
        // "+     blah<div>blah", a bug in showdown
        // "+        blah<div>blah", a bug in showdown
        // "-        blah<div>blah", a bug in showdown
        // "*        blah<div>blah", a bug in showdown
        // Block elements
        // "\n\n<div>\n\n<table>\n\n</table>\n\n", a bug in showdown
        // "blah<div>blah\na", a bug in showdown
        // Horizontal Rules
        "***",
        "---",
        "___",
        "*****",
        "-----",
        "_____",
        "* * *",
        "- - -",
        "_ _ _",
        "***blah\na",
        "---blah\na",
        "___blah\na",
        // Reference Links
        "a\na\n[id]: http://example.com \"Title\"",
        // "a\na\n[id]: http://example.com \'Title\'", bug in showdown
        "a\na\n[id]: http://example.com (Title)",
        // DOESN'T SUPPORT LINE BREAKS FOR URLS YET...
        // "a\n[id]: http://example.com\n\t (Title)",
        "a\na\n[id]: http://example.com",
        "a\na\n[id]: <http://example.com>",
        "a\na\n   [id]: http://example.com",
        "a\na\n   [id]: /example.com",
        // (you can indent up to 3 spaces)
        // (note that after 3 spaces the inline id will be considered an href in
        // its own right...
        // "a\n    \\[id]: http://example.com/", don't care we return a <code>
        // "a\n    [id]: http://example.com/", don't care we return a <code>
        // Inline Links
        "An [example] (http://example.com/ \"Title\") of link\na",
        "An [example](http://example.com/ \"Title\") of link\na",
        "An [example](http://example.com/ \'Title\') of link\na",
        "An [example](http://example.com/ (Title)) of link\na",
        "An [](http://example.com/ \"Title\") of link\na",
        "An [example](http://example.com/) of link\na",
        // Inline Images
        "an ![Alt] (path/jpg.jpg \"Title\") image\na",
        "an ![Alt](path/jpg.jpg \"Title\") image\na",
        "an ![Alt](path/jpg.jpg \'Title\') image\na",
        // "an ![Alt](path/jpg.jpg (Title)) image\na", in showdown this invalid format is invalid in a different way to an inline http reference with the title in brackets :(
        "an ![Alt](path/jpg.jpg ) image\na",
        "an ![](path/jpg.jpg ) image\na",
        // Reference Links
        "[id]: /a/path\nSome text [hey][id] there\na",
        "[id]: /a/path\nSome text [hey] [id] there\na",
        // "[id]: /a/path\nSome text [hey]  [id] there\na", pointlessly hard to be error compatible for this :(
        "[id]: /a/path\nSome text \\[id] there\na",
        "[id]:   \t \t   /a/path\nSome text [hey][id] there\na",
        // Reference Images
        "[id]: /a/path\nSome text ![hey][id] there\na",
        "[id]: /a/path\nSome text ![hey] [id] there\na",
        // "[id]: /a/path\nSome text ![hey]  [id] there\na",pointlessly hard to be error compatible for this :(
        // urls and e-mail addresses inline...
        "blah <http://something.com:1234/a/path> blah\na",
        "blah <https://something.com:1234/a/path> blah\na",
        // "blah <httpx://something.com:1234/a/path> blah\na", yes, we escape the bra and kets, showdown doesnt which is a bit worrying :(
        // Erk, this is a bit spam-tastic...
        // "blah <junk@spam.com> blah\na", yeah known bug with our implementation
        //
        // The Rich Text Editor we use supports an abbreviated syntax for links
        //
        "My [id] test\n[id]: http://example.com",
        "My [link][id] test\n[id]: http://example.com",
        //
        // Bug fix regression tests
        //
        // "Now\n\n    who\n\n> swine\n\n", can't fix but you can't see it anyway
        "`<div>blah</div>`",
        //
        // WMD Gui Compatibility Tests
        //
        // "blah`tick`blah", showdown doesn't escape tags here...
        "blah\n\n\nbleh",
        "[link text][1]\n\n[1]: http://example.com \"optional title\"",
        "[link text][1]\n\n[1]: http://example.com",
        "![alt text][1]\n\n[1]: http://example.com \"optional title\"",
        "![alt text][1]\n\n[1]: http://example.com",
        "  \n",
        // "  \n> ", more whitespace guff
        // "  \n> blah\n blah", more whitespace guff
        // "  \n> blah\n> bleh\n\n", more whitespace guff
        // "  \n> blah\n bleh\n\n", more whitespace guff
        "> blah\n-------------"
        ];

var converter;
var text = "";
var item;
var input;
var output;
var head;
var tail;
converter = new Attacklab.showdown.converter();
item = document.getElementById("tests");
for (var test in tests) {
  input = tests[test];
  input = input.replace(/[\\]/g,"\\\\" );
  input = input.replace(/[\r]/g,"\\r" );
  input = input.replace(/[\n]/g,"\\n" );
  input = input.replace(/[\t]/g,"\\t" );
  input = input.replace(/[\"]/g, "\\\"");
  output = converter.makeHtml(tests[test]);
  output = output.replace(/[\\]/g,"\\\\" );
  output = output.replace(/[\r]/g, "\\r");
  output = output.replace(/[\n]/g, "\\n");
  output = output.replace(/[\t]/g, "\\t");
  output = output.replace(/[\"]/g, "\\\"");
  // build the tests arsey=backwards because the basic tests are
  // at the beginning but it is easier to fix the last tests
  // when running a test suite under eunit - so make the easy ones last
  text = "     ?_assert(conv(\"" + input + "\") == \"" + output + "\"),\n" + text;
};
head = "unit_test_() -> \n    [\n";
tail = "\n    ].";
text = text.slice(0, text.length - 2);
item.value = head + text + tail;