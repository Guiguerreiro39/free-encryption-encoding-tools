"use static";

export const RSALearning = () => {
  return (
    <article className="space-y-4">
      <section>
        <h4 className="font-semibold mb-2">What is RSA Encryption?</h4>
        <p className="text-muted-foreground text-sm">
          RSA (Rivest–Shamir–Adleman) is a widely used asymmetric encryption
          algorithm. Unlike symmetric encryption, RSA uses a pair of keys: a
          public key for encryption and a private key for decryption. It&apos;s
          a foundational technology for securing digital communications,
          especially over the internet.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <div>
          <h5 className="font-semibold mb-2">Key Features of RSA:</h5>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>
              <strong className="font-semibold">Asymmetric Encryption:</strong>{" "}
              Uses two keys — public and private.
            </li>
            <li>
              <strong className="font-semibold">Based on Number Theory:</strong>{" "}
              Relies on the difficulty of factoring large prime numbers.
            </li>
            <li>
              <strong className="font-semibold">Key Lengths:</strong> Commonly
              2048 or 4096 bits.
            </li>
            <li>
              <strong className="font-semibold">Slower:</strong> Not ideal for
              bulk data encryption.
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Common Uses:</h5>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Secure key exchange</li>
            <li>Digital signatures</li>
            <li>SSL/TLS (HTTPS)</li>
            <li>Email encryption (PGP, S/MIME)</li>
          </ul>
        </div>
      </section>

      <section>
        <h5 className="font-semibold mb-2">How RSA Works</h5>
        <p className="text-sm text-muted-foreground mb-2.5">
          RSA uses a pair of mathematically linked keys. Here’s a simplified
          view of the process:
        </p>
        <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 mb-4">
          <li>Generate two large prime numbers (p and q).</li>
          <li>
            Compute <code>n = p × q</code> and{" "}
            <code>ϕ(n) = (p - 1)(q - 1)</code>.
          </li>
          <li>
            Choose public exponent <code>e</code> such that 1 &lt; e &lt; ϕ(n).
          </li>
          <li>
            Calculate private exponent <code>d</code> such that{" "}
            <code>d × e ≡ 1 (mod ϕ(n))</code>.
          </li>
          <li>
            Publish <code>{`{e, n}`}</code> as the public key and keep{" "}
            <code>{`{d, n}`}</code> private.
          </li>
        </ol>
        <p className="text-sm text-muted-foreground">
          To encrypt, the sender uses the recipient’s public key. To decrypt,
          the recipient uses their private key.
        </p>
      </section>

      <section>
        <h5 className="font-semibold mb-2">Encryption vs. Signing</h5>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h6 className="font-semibold mb-1.5">Encryption</h6>
            <p className="text-muted-foreground">
              Encrypt with the recipient&apos;s <strong>public key</strong>,
              decrypt with their <strong>private key</strong>.
            </p>
            <p className="text-muted-foreground">Used for confidentiality.</p>
          </div>
          <div>
            <h6 className="font-semibold mb-1.5">Digital Signatures</h6>
            <p className="text-muted-foreground">
              Sign with your <strong>private key</strong>, verify with your{" "}
              <strong>public key</strong>.
            </p>
            <p className="text-muted-foreground">
              Used for authenticity and integrity.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h5 className="font-semibold mb-2">Limitations of RSA</h5>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          <li>Slower than symmetric algorithms like AES.</li>
          <li>Not suitable for encrypting large files directly.</li>
          <li>Quantum computers could eventually break RSA.</li>
        </ul>
      </section>

      <section>
        <h5 className="font-semibold mb-4">RSA vs Symmetric Encryption</h5>
        <div className="overflow-auto rounded-lg border text-sm text-muted-foreground">
          <table className="w-full text-left border-collapse">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="p-2 border-b font-semibold">Feature</th>
                <th className="p-2 border-b font-semibold">RSA</th>
                <th className="p-2 border-b font-semibold">AES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b">Type</td>
                <td className="p-2 border-b">Asymmetric</td>
                <td className="p-2 border-b">Symmetric</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Keys Used</td>
                <td className="p-2 border-b">Public & Private</td>
                <td className="p-2 border-b">Single Shared Key</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Speed</td>
                <td className="p-2 border-b">🐢 Slow</td>
                <td className="p-2 border-b">⚡ Fast</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Best For</td>
                <td className="p-2 border-b">Key exchange, signatures</td>
                <td className="p-2 border-b">Bulk data encryption</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Security Basis</td>
                <td className="p-2 border-b">Prime factorization</td>
                <td className="p-2 border-b">Substitution & permutation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
};
