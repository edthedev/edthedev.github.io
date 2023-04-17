

Clumon Recorder
Clumon Recorder is a data visualization add-on that I created for NCSA’s Clumon supercomputer cluster monitoring software.

I was hired by SGI to help maintain an SGI supercomputer at NCSA. It was crashing regularly (which isn’t that unusual for supercomputers); but it was also only attaining roughly 64% uptime – which is tragically bad, even for a supercomputer.

I started attending meetings with IT professionals at both SGI and NCSA, and I quickly learned that our problem wasn’t just an unstable system, it was a total lack of knowledge about our supercomputer. The supercomputer in question had so much memory attached that it took four hours (on high speed cable and drives) to save the contents of memory off to a hard drive.

We weren’t sure what was causing the crashes, so we started doing a core dump after every crash. Obviously, a four hour minimum downtime following a weekly crash is going to cause some downtime issues all by itself.

And so SGI technicians were exhausting themselves reading massive dump files without knowing what to look for – just hoping to stumble across a probable cause in an avalanche of raw data.

This is where I stepped in. I quickly realized that we needed to solve two core problems:

We needed to collect our information in real time, while the supercomputer was in a reliable running state, and so returning the most reliable possible data.

We needed a way to recognize conditions that were out of the ordinary.

Well it turns out that SGI has Performance Co-Pilot installed on their supercomputer, and NCSA monitors everything with Clumon cluster manager. They’re both top quality tools. But Clumon didn’t know how to consume PCP data, and PCP didn’t know how to share it’s data over the internet.

Clumon provided the path to victory, in a small piece of code that used PHP to do some simple dashboard graphs. I looked at that and realized that we needed Clumon to provide graphs for everything it knew, and that Clumon needed to know everything that PCP did.

So I spent a year writing PHP and Python code, using a Nagios installation to determine what data needed tracking and graphing added next. Clumon Recorder ultimately provided the forensic reporting that we needed to track down what turned out to be half a dozen serious stability bugs in the software and hardware configuration of the supercomputer. After we solved them, we had the supercomputer up to 95% uptime (and about 3% of the downtime was scheduled maintenance).

Clumon Recorder was written under the NCSA/University of Illinois open source license, and I believe that it’s abilities were integrated into the Clumon core application in a later release.